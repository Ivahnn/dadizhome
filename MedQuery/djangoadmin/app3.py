# this code is the combination of app2 and streamlitTest,py

import streamlit as st
from langchain_community.document_loaders import PDFPlumberLoader
from langchain_experimental.text_splitter import SemanticChunker
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_community.llms import Ollama
from langchain.chains import RetrievalQA
from langchain.chains.llm import LLMChain
from langchain.chains.combine_documents.stuff import StuffDocumentsChain
from langchain.prompts import PromptTemplate

# Set up the page configuration and title
st.set_page_config(page_title="MedQuery", page_icon="🤖", layout="wide")
st.title("MedQuery")

# Cache the initialization to avoid re-running it
@st.cache_resource
def initialize_model():
    print("Embedder Starting")
    embedder = HuggingFaceEmbeddings()

    print("Proceeding to instantiate model...")
    llm = Ollama(model="gemma:2b")

    prompt_template = """
    1. Use the following pieces of context to answer the question at the end.
    2. If you don't know the answer, just say that "I don't know" but don't make up an answer on your own.
    3. Keep the answer crisp and limited to 3-4 sentences.

    Context: {context}
    Question: {question}
    """

    QA_CHAIN_PROMPT = PromptTemplate.from_template(prompt_template)

    document_prompt = PromptTemplate(
        input_variables=["page_content", "source"],
        template="Context:\ncontent:{page_content}\nsource:{source}",
    )

    llm_chain = LLMChain(
        llm=llm,
        prompt=QA_CHAIN_PROMPT,
        callbacks=None,
        verbose=True
    )

    combine_documents_chain = StuffDocumentsChain(
        llm_chain=llm_chain,
        document_variable_name="context",
        document_prompt=document_prompt,
        callbacks=None,
    )

    retriever = initialize_retriever(embedder)

    qa = RetrievalQA(
        combine_documents_chain=combine_documents_chain,
        verbose=True,
        retriever=retriever,
        return_source_documents=True,
    )

    return qa


def initialize_retriever(embedder):
    print_green("Loading Data...")
    file_path = "banana.pdf"
    loader = PDFPlumberLoader(file_path)
    docs = loader.load()
    
    print_green("Data Loaded...")
    print_green("Chunking Text...")
    text_splitter = SemanticChunker(embedder)
    chunks = text_splitter.split_documents(docs)
    
    print_green("Data Chunked...")
    print_green("Creating vector...")
    vector = FAISS.from_documents(chunks, embedder)  # These are the chunks being embedded in a vector DB 
    print_green("Vector Created...")

    print_green("Creating Retriever")
    retriever = vector.as_retriever(search_type="similarity", search_kwargs={"k": 3})
    print_green("Retriever Online...")

    return retriever

def print_green(text):
    print("\033[1;32m{}\033[0m".format(text))

qa = initialize_model()

def main():
    st.write("Ask a medical question and get context-based answers:")
    user_prompt = st.text_input("Enter your question:", "")
    
    if st.button("Submit"):
        if user_prompt:
            st.write("Processing your query...")
            response = qa({"query": user_prompt})  # Use the correct input key "query"
            st.write(response["result"])
        else:
            st.write("Please enter a question.")

if __name__ == "__main__":
    main()
