# 🦜🔗 LangChain Notes

---

## Q1. What is LangChain?

**Answer**

📝 LangChain is a free, open-source framework that makes it easier to build applications using Large Language Models (LLMs). While an LLM can generate text from a prompt, real-world AI applications often need more than just text generation — they may need to access documents, search databases, remember previous conversations, call external APIs, or perform multi-step reasoning. LangChain provides a structured way to combine all these capabilities with an LLM.

📝 Example: if you want a chatbot that answers questions from company documents, the LLM alone cannot access those documents. LangChain can retrieve the relevant information and provide it to the model before generating a response.

```python
 !pip install langchain_groq
 
from langchain_groq import ChatGroq

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key="YOUR_GROQ_API_KEY"
)

response = llm.invoke("What is AI?")
print(response.content)
```

---

## Q2. What is an LLM in LangChain?

**Answer**

📝 LLM (Large Language Model) is the core component that generates text responses.

```python
# from langchain_openai import OpenAI
from langchain_groq import ChatGroq

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key="YOUR_GROQ_API_KEY"
)


# llm = OpenAI()
print(llm.invoke("Tell me a joke"))
```

---

## Q3. What is pip?

📝 `pip` is Python's traditional package manager.

```bash
pip install langchain
```

## Q4. What is uv?

📝 `uv` is a modern Python package manager developed by Astral — faster than `pip`.

```bash
uv add langchain
```

---

## Q5. what is models? llm vs chat model ?What is a Chat Model?

**Answer**

📝 A Model is the AI engine that generates responses.

```python
model = ChatOpenAI(
    model='gpt-4',
    temperature=1.5,
    max_completion_tokens=10
)

result = model.invoke("Write a 3 line poem on home")
```

| Feature            | LLM             | Chat Model       |
| ------------------ | --------------- | ---------------- |
| Input              | String          | Messages         |
| Output             | String          | AI Message       |
| Conversation Aware | ❌               | ✅                |
| Roles              | ❌               | ✅                |
| Chat History       | ❌               | ✅                |
| Best For           | Text completion | Chatbots, Agents |

📝 Chat models work with messages such as `Human`, `AI`, and `System` messages.

```python
!pip install -q langchain langchain-core langchain-groq python-dotenv

from kaggle_secrets import UserSecretsClient
from langchain_groq import ChatGroq
from langchain_core.messages import (
    SystemMessage,
    HumanMessage,
    AIMessage
)
import os

# Load secret
user_secrets = UserSecretsClient()
os.environ["GROQ_API_KEY"] = user_secrets.get_secret("GROQ_API_KEY")

# Verify
print("API Key loaded?", os.getenv("GROQ_API_KEY") is not None)

# Create model
model = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0.7
)

# Message history
messages = [
    SystemMessage(
        content="You are a helpful AI assistant and expert mathematician."
    ),
    
    HumanMessage(
        content="What is 100 divided by 5?"
    ),

    AIMessage(
        content="100 divided by 5 is 20."
    ),

    HumanMessage(
        content="Now multiply that result by 10."
    )
]

# Invoke model
response = model.invoke(messages)

print("AI:", response.content)
```

---

## Q6. What is `load_dotenv()`?

**Answer**

📝 `load_dotenv()` loads environment variables from a `.env` file into the application's environment.

```python
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
```

---

## Q7. Understanding Message Roles

**System Role** — defines the assistant's behavior
```json
{
    "role": "system",
    "content": "You are an Eastern poet."
}
```

**User Role** — contains instructions or questions from the user
```json
{
    "role": "user",
    "content": "Write me a poem about the moon."
}
```

**Multi-message conversation example**
```python
messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "What is the capital of France?"},
    {"role": "assistant", "content": "The capital of France is Paris."},
    {"role": "user", "content": "Can you also tell me the population of Paris?"}
]
```

**Creative prompt example**
```python
messages = [
    {
        "role": "system",
        "content": "You are an Eastern poet."
    },
    {
        "role": "user",
        "content": """
        Write me a short poem about the moon.
        Write it in the style of a haiku.
        Include the title at the top.
        """
    }
]
```

---

## Q8. What is `PromptTemplate`?

**Answer**

📝 `PromptTemplate` is a LangChain class used to create dynamic prompts using placeholders. Instead of hardcoding prompts, you create a reusable template and pass different values when needed.

**Example 1**
```python
!pip install -q langchain

from langchain_core.prompts import PromptTemplate

prompt = PromptTemplate(
    input_variables=["topic"],
    template="Explain {topic} in simple words."
)

result = prompt.format(topic="Machine Learning")

print(result)
```

**Example 2**
```python

from langchain_core.prompts import PromptTemplate
from langchain_groq import ChatGroq

model = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0
)

prompt = PromptTemplate(
    input_variables=["country"],
    template="What is the capital of {country}?"
)

final_prompt = prompt.format(country="France")

response = model.invoke(final_prompt)

print(response.content)
```

### Advantages of PromptTemplate
- Reusable prompts
- Dynamic input handling
- Cleaner code
- Better maintainability
- Reduced duplication

---

## Q9. Prompt Template for Language Translation

📝 A `PromptTemplate` can be used to build a translation prompt that translates text from one language to another using an LLM.

```python
from kaggle_secrets import UserSecretsClient
from langchain_groq import ChatGroq
from langchain_core.prompts import PromptTemplate
import os

# Load Groq API key from Kaggle Secrets
user_secrets = UserSecretsClient()
os.environ["GROQ_API_KEY"] = user_secrets.get_secret("GROQ_API_KEY")

# Initialize Groq model
llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0
)

# Create Prompt Template
prompt = PromptTemplate.from_template("""
You are a helpful translator.

Translate the following text
from {input_language}
to {output_language}:

Text: {text}
""")

# Format prompt
formatted_prompt = prompt.format(
    input_language="English",
    output_language="French",
    text="Hello, how are you?"
)

print("Formatted Prompt:")
print(formatted_prompt)

# Invoke model
response = llm.invoke(formatted_prompt)

print("\nAI Response:")
print(response.content)
```

---

## Q10. Types of Prompt Templates in LangChain

**1. PromptTemplate** — used for single text prompts
```python
prompt = PromptTemplate(
    input_variables=["country"],
    template="What is the capital of {country}?"
)
```

**2. ChatPromptTemplate** — used for chat-based applications involving multiple roles

**3. MessagesPlaceholder** — maintains conversation history dynamically

**4. FewShotPromptTemplate** — provides examples before the actual query. Few-shot prompting improves output quality and consistency by showing the model examples first.

```python
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate, FewShotPromptTemplate

load_dotenv()

llm = ChatOpenAI(model="gpt-4o-mini")

# Examples
examples = [
    {"english": "Hello", "french": "Bonjour"},
    {"english": "How are you?", "french": "Comment ça va ?"}
]

# Example format
example_prompt = PromptTemplate(
    input_variables=["english", "french"],
    template="""
English: {english}
French: {french}
"""
)

# Few-shot template
few_shot_prompt = FewShotPromptTemplate(
    examples=examples,
    example_prompt=example_prompt,
    input_variables=["input_text"],
    prefix="Translate the following English text to French:",
    suffix="English: {input_text}\nFrench:"
)

formatted_prompt = few_shot_prompt.format(input_text="Good Morning")
print(formatted_prompt)

response = llm.invoke(formatted_prompt)
print("\nTranslation:")
print(response.content)
```

**5. FewShotChatMessagePromptTemplate** — few-shot prompting specifically designed for chat models

---

## Q11. What is a Chain? What problem resolved by Chain?

**Answer**

📝 A chain connects multiple LangChain components together (Prompt → LLM → Output Parser) to create a complete workflow.Instead of calling the LLM directly, chains allow you to build a step-by-step pipeline.

```txt
User Input
      ↓
Prompt Template
      ↓
LLM (Groq/OpenAI/etc.)
      ↓
Output Parser
      ↓
Final Result
```

```python
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser

prompt = PromptTemplate(
    input_variables=["topic"],
    template="Explain {topic} in simple words."
)

chain = prompt | llm | StrOutputParser()

result = chain.invoke({
    "topic": "Generative AI"
})

print(result)
```
📝 A Chain solves the problem of manually managing multiple steps in an LLM workflow by connecting components such as Prompt → Model → Output Parser → Next Step into a single pipeline.

```python
!pip install langchain langchain-openai python-dotenv
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.messages import (
    SystemMessage,
    HumanMessage,
    AIMessage
)

load_dotenv()

model = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key="your_groq_api_key"
)

chat_history = [
    SystemMessage(content="You are a helpful AI assistant")
]

while True:
    user_input = input("You: ")

    if user_input.lower() == "exit":
        break

    chat_history.append(
        HumanMessage(content=user_input)
    )

    result = model.invoke(chat_history)

    chat_history.append(
        AIMessage(content=result.content)
    )

    print("AI:", result.content)

print(chat_history)
```
---

## Q12. What is a Simple Chain?

📝 The most basic form of a LangChain workflow:
```
Input → Prompt → LLM → Output
```

```python
from langchain_core.prompts import PromptTemplate
from langchain_openai import ChatOpenAI

prompt = PromptTemplate(
    input_variables=["country"],
    template="What is the capital of {country}?"
)

llm = ChatOpenAI(model="gpt-4o-mini")

chain = prompt | llm

result = chain.invoke({"country": "France"})
print(result.content)
```

---

## Q13. What is a Sequential Chain?

📝 A Sequential Chain consists of multiple chains connected together.

```python
from langchain_groq import ChatGroq
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser

# Model
llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0.7
)

# Prompt 1
prompt1 = PromptTemplate.from_template(
    "Explain the topic: {topic} in 100 words."
)

# Prompt 2
prompt2 = PromptTemplate.from_template(
    "Summarize the following explanation in 20 words:\n\n{text}"
)

# Parser
parser = StrOutputParser()

# Chain 1
chain1 = prompt1 | llm | parser

# Get explanation
explanation = chain1.invoke({
    "topic": "Artificial Intelligence"
})

print("Explanation:\n")
print(explanation)

# Chain 2
chain2 = prompt2 | llm | parser

summary = chain2.invoke({
    "text": explanation
})

print("\nSummary:\n")
print(summary)
```

---
## Q13.1. What is Parallel Chain?

A Parallel Chain executes multiple chains at the same time on the same input and returns all results together.

```txt
          Input
            |
    ----------------
    |              |
 Prompt1      Prompt2
    |              |
   LLM           LLM
    |              |
 Output1      Output2
    ----------------
            |
      Combined Result
```
```python
	  
from langchain_groq import ChatGroq
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableParallel

# Model
llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0.7,
	api_key="gsk_your_actual_groq_api_key"
)

parser = StrOutputParser()

# Prompt 1
summary_prompt = PromptTemplate.from_template(
    "Provide a short summary of {topic}"
)

# Prompt 2
keywords_prompt = PromptTemplate.from_template(
    "Give 5 keywords related to {topic}"
)

# Chains
summary_chain = summary_prompt | llm | parser
keywords_chain = keywords_prompt | llm | parser

# Parallel Chain
parallel_chain = RunnableParallel(
    summary=summary_chain,
    keywords=keywords_chain
)

result = parallel_chain.invoke({
    "topic": "Artificial Intelligence"
})

print(result)
```
---
## Q13.2. What is Conditional Chain?

A Conditional Chain executes different chains based on a condition.
```txt
Input
  |
Condition Check
  |
---------------------
|                   |
Positive         Negative
|                   |
Chain A          Chain B
|                   |
Output           Output
```
```python
from langchain_groq import ChatGroq
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableLambda

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0.7
)

parser = StrOutputParser()

# Technical prompt
tech_prompt = PromptTemplate.from_template(
    "Answer this technical question: {question}"
)

# General prompt
general_prompt = PromptTemplate.from_template(
    "Answer this general question: {question}"
)

tech_chain = tech_prompt | llm | parser
general_chain = general_prompt | llm | parser

# Router Function
def route(info):
    question = info["question"]

    if "python" in question.lower():
        return tech_chain.invoke(info)

    return general_chain.invoke(info)

conditional_chain = RunnableLambda(route)

result = conditional_chain.invoke({
    "question": "What is Python list comprehension?"
})

print(result)
```
---

## Q14. What is Memory?

**Answer**

📝 Memory stores previous conversations.

```python
from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory()

memory.save_context(
    {"input": "Hi"},
    {"output": "Hello"}
)

print(memory.load_memory_variables({}))
```

---

## Q15. Why Use Chat History?

**Answer**

📝 To maintain context across multiple interactions.

```python
from langchain_core.chat_history import InMemoryChatMessageHistory

history = InMemoryChatMessageHistory()

history.add_user_message("Hi")
history.add_ai_message("Hello")
```

**Simple chat completion request**
```python
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": "What is the capital of France?"}
    ]
)
```

---

## Q16. What is an Agent?

**Answer**

📝 An agent chooses tools dynamically to solve tasks.

```python
from langchain.agents import create_agent
from langchain_groq import ChatGroq
from langchain.tools import tool

@tool
def add(a: int, b: int) -> int:
    """Add two numbers."""
    return a + b

llm = ChatGroq(
    model="llama-3.3-70b-versatile"
)

agent = create_agent(
    model=llm,
    tools=[add],
    system_prompt="You are a math assistant."
)

result = agent.invoke(
    {"messages": [{"role": "user", "content": "Add 100 and 250"}]}
)

print(result)
```

---

## Q17.What is vector store? Why Use a Vector DB?

A Vector Store is a system designed to store and retrieve data represented as numerical vectors (embeddings).

`A vector store helps:`

✅ Store embeddings

✅ Perform similarity search

✅ Retrieve relevant chunks

✅ Support RAG applications

**Answer**

📝 Stores embeddings for semantic search.

```python
from langchain_chroma import Chroma

vectorstore = Chroma.from_texts(
    ["LangChain Framework"],
    embedding
)
```

---
## Q17.1. What is Chroma?

ChromaDB is an open-source vector store/database used to store embeddings and perform similarity searches.

It is one of the most commonly used and easy vector stores in LangChain.

```python
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain_core.documents import Document

docs = [
    Document(
        page_content="LangChain is used for LLM applications."
    ),
    Document(
        page_content="Chroma is a vector store."
    )
]

vectorstore = Chroma.from_documents(
    documents=docs,
    embedding=OpenAIEmbeddings(),
    persist_directory="./chroma_db"
)
```
---

## Q18. What is a Document Loader?

**Answer**

📝 A Document Loader is a LangChain component used to load data from different sources (TXT, PDF, CSV, Websites, Word documents, etc.) and convert it into LangChain's standard Document object format.

```python
 Document(
    page_content="Actual text content",
    metadata={"source": "sample.txt"}
)
```
**Types of Document Loaders**

1. TextLoader:
TextLoader is used to load content from a text file (.txt).
```python
from langchain_community.document_loaders import TextLoader

loader = TextLoader(
    "sample.txt",
    encoding="utf-8"
)

docs = loader.load()

print(docs[0])
print(docs[0].page_content)
```
2. PyPDFLoader

PyPDFLoader is a document loader in LangChain used to load content from PDF files and convert each page into a Document object.
```python
from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader("sample.pdf")

docs = loader.load()
```

3. CSVLoader:
Loads CSV files.
```python
from langchain_community.document_loaders import CSVLoader

loader = CSVLoader(
    file_path="employees.csv"
)

docs = loader.load()

print(docs)
```
4. WebBaseLoader

WebBaseLoader is a document loader used to load and extract text content from web pages (URLs).
`Use Case`
- Web scraping
- Website chatbot
- Knowledge-base creation
```python
from langchain_community.document_loaders import WebBaseLoader

loader = WebBaseLoader(
    "https://python.langchain.com"
)

docs = loader.load()

print(docs[0].page_content)
```
5. DirectoryLoader

Loads all files inside a folder.
`Use Case`
- Multiple files
- Bulk document ingestion
```python
from langchain_community.document_loaders import DirectoryLoader

loader = DirectoryLoader(
    "documents/",
    glob="*.txt"
)

docs = loader.load()

print(docs)
```

| Feature          | load()        | lazy\_load() |
| ---------------- | ------------- | ------------ |
| Loading Type     | Eager         | Lazy         |
| Returns          | List          | Generator    |
| Memory Usage     | High          | Low          |
| Large Files      | ❌             | ✅            |
| Small Files      | ✅             | ✅            |
| Processing Speed | Faster Access | Stream Based |

### 📦 Project: PDF Summarizer

**Setup**
```bash
uv add streamlit langchain langchain-groq langchain-community pypdf python-dotenv
```

```
project/
│
├── app.py
├── .env
```

```bash
# .env
GROQ_API_KEY=your_groq_api_key
```

**app.py**
```python
import streamlit as st
import os

from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_community.document_loaders import PyPDFLoader
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

load_dotenv()

st.title("📄 PDF Summarizer")

uploaded_file = st.file_uploader("Upload PDF", type=["pdf"])

if uploaded_file:
    file_path = uploaded_file.name

    with open(file_path, "wb") as f:
        f.write(uploaded_file.getbuffer())

    # Load PDF
    loader = PyPDFLoader(file_path)
    pages = loader.load()

    # Extract text
    text = ""
    for page in pages:
        text += page.page_content

    st.success("PDF Loaded Successfully!")

    # LLM
    llm = ChatGroq(model="llama-3.3-70b-versatile")

    # Prompt
    prompt = PromptTemplate(
        input_variables=["content"],
        template="""
        Summarize the following PDF in 5 bullet points.

        {content}

        Summary:
        """
    )

    chain = LLMChain(llm=llm, prompt=prompt)

    summary = chain.invoke({"content": text})

    st.subheader("📌 Summary")
    st.write(summary["text"])
```

---

## Q19. Why Use a Text Splitter?

**Answer**

📝 Text Splitting is the process of breaking large text (PDFs, books, articles, websites, documents) into smaller chunks that an LLM can process efficiently.
`Benefits of Text Splitting`

1. Better Embeddings:
Smaller chunks create more accurate vector embeddings.
2. Better Semantic Search
3. Better Summarization

```txt
Document
   │
   ▼
Document Loader
   │
   ▼
Text Splitter
   │
   ▼
+---------+
| Chunk 1 |
+---------+

+---------+
| Chunk 2 |
+---------+

+---------+
| Chunk 3 |
+---------+

   │
   ▼
Embeddings
   │
   ▼
Vector Database
   │
   ▼
Retriever
   │
   ▼
LLM Answer
```
```python
from langchain_text_splitters import RecursiveCharacterTextSplitter

text = """
Artificial Intelligence (AI) is a field of computer science
that focuses on creating systems capable of performing tasks
that normally require human intelligence.
""" * 20

splitter = RecursiveCharacterTextSplitter(
    chunk_size=100,
    chunk_overlap=20,
    separator=''
)

chunks = splitter.split_text(text)

print("Number of chunks:", len(chunks))

print(chunks[0].page_content)
```

---

## Q20. What is Structured Output?

**Answer**

📝 Structured Output means forcing an LLM to return data in a predefined format instead of free-form text.

**benifit**

- API Friendly
- Perfect for FastAPI, Streamlit, databases, and agents.
- Better Reliability
- Response follows the schema even if the model is creative.

```python
# exp1
from langchain_groq import ChatGroq
from pydantic import BaseModel

class LLMSchema(BaseModel):
    setup: str
    punchline: str

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key="gsk_your_api_key"
)

structured_llm = llm.with_structured_output(LLMSchema)

result = structured_llm.invoke(
    "Tell me a joke about Python programming."
)

print(result)
print(result.setup)
print(result.punchline)

# exp2 more compact context

from dotenv import load_dotenv
from typing_extensions import TypedDict, Annotated

from langchain_groq import ChatGroq

load_dotenv()

class OutputSummary(TypedDict):
    summary: Annotated[
        str,
        "Write a concise summary in 1-2 sentences"
    ]
    
    sentiment: Annotated[
        str,
        "Sentiment of the text: positive, negative, or neutral"
    ]

model = ChatGroq(
    model="llama-3.3-70b-versatile"
)

model = model.with_structured_output(OutputSummary)

result = model.invoke(
    """
    LangChain is a powerful framework for building LLM applications.
    It simplifies prompt management, RAG pipelines, and agent creation.
    Developers love it because it accelerates AI application development.
    """
)

print(result)
print(result["summary"])
print(result["sentiment"])
```

---

## Q21. Using the OpenAI API with Python

📝 Initializes the OpenAI client using an API key stored in an environment variable, and sends a prompt to the model.

```python
from openai import OpenAI
import os

# Initialize the OpenAI client with your API key
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": "What is the capital of France?"}
    ]
)

print("Response from OpenAI API:")
print(response.choices[0].message.content)
```

---

## Q22. What is Batch Processing?

**Answer**

📝 A technique where multiple independent prompts are sent to the model in a single request instead of several individual requests.

**Without batch processing**
```
Request 1 → API → Response 1
Request 2 → API → Response 2
Request 3 → API → Response 3
```

**With batch processing**
```
           Batch Request
                 |
                 v
              OpenAI
                 |
      -------------------------
      |          |            |
      v          v            v
  Response1  Response2   Response3
```

**Drawbacks of NOT using batch processing (i.e. individual calls)**
- Multiple API calls
- Increased latency
- More network overhead
- More code complexity

---

## 📦 Project: Chatbot

```python
from dotenv import load_dotenv
from langchain_core.messages import AIMessage, HumanMessage, SystemMessage
from langchain_groq import ChatGroq   
import os

# Load env variables
load_dotenv()
model = ChatGroq(model="llama-3.3-70b-versatile", temperature=0.7)  
print("API Key loaded?", os.getenv("GROQ_API_KEY") is not None)

# Initialize chat history
chat_history = []

# user message 
message = [
    SystemMessage(content="Solve the following math problem"),
    HumanMessage(content="what is 100 divide by 5?")
]
result = model.invoke(message)
print(f"answer from AI: {result.content}")

# ai message 
message = [
    SystemMessage(content="Solve the following math problem"),
    HumanMessage(content="what is 100 divide by 5?"),
    AIMessage(content="81 divide by 9 is 9"),
    HumanMessage(content="what is 10 times 5?")
]
result = model.invoke(message)
print(f"answer from AI: {result.content}")

# add system role
system_message = SystemMessage(content="you are a helpful AI assistant")
chat_history.append(system_message)

# chat loop
while True:
    query = input("You: ")
    if query.lower() == "exit":
        break
    chat_history.append(HumanMessage(content=query))

    result = model.invoke(chat_history)
    response = result.content
    chat_history.append(AIMessage(content=response))
    print(f"AI: {response}")

print("-------message history------")
print(chat_history)
```
## 📦 Project: fetch weather report

```python
!pip install langchain langchain-groq requests python-dotenv

import requests
from dotenv import load_dotenv

from langchain.tools import tool
from langchain.agents import create_agent
from langchain_groq import ChatGroq

# Load environment variables
load_dotenv()


# Tool Definition
@tool
def get_weather(city: str) -> str:
    """
    Return current weather information for a city.
    """
    response = requests.get(
        f"https://wttr.in/{city}?format=j1"
    )

    data = response.json()

    current = data["current_condition"][0]

    return (
        f"City: {city}\n"
        f"Temperature: {current['temp_C']}°C\n"
        f"Humidity: {current['humidity']}%\n"
        f"Weather: {current['weatherDesc'][0]['value']}"
    )


# Groq Model
model = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0,
	api_key='YOUR_GROQ_API_KEY'
)


# Create Agent
agent = create_agent(
    model=model,
    tools=[get_weather],
    system_prompt="""
    You are a helpful weather assistant.
    Use the weather tool whenever weather information is requested.
    """
)

# Invoke Agent
response = agent.invoke(
    {
        "messages": [
            {
                "role": "user",
                "content": "What is the weather in Delhi?"
            }
        ]
    }
)

print(response)
```

## 📦 Bonus Project: CSV Data Analysis App (Pandas + Streamlit)

```python
import streamlit as st
import pandas as pd
import altair as alt

st.title("📊 Data Analysis with CSV File")

# File uploader
file = st.file_uploader("Upload your CSV file", type=["csv"])

@st.cache_data
def load_data(uploaded_file):
    return pd.read_csv(uploaded_file)

if file:
    # Load CSV
    df = load_data(file)

    # Show preview
    st.subheader("🔎 Data Preview")
    st.dataframe(df.head())

    # City filter
    if "City" in df.columns:
        cities = df["City"].unique()
        selected_city = st.selectbox("Filter by City", cities)
        filtered_data = df[df["City"] == selected_city]

        st.subheader(f"🏙️ Data for {selected_city}")
        st.dataframe(filtered_data)

        # Sales Rate Graph
        if "Sales" in df.columns:
            st.subheader(f"📊 Sales Rate in {selected_city}")
            chart = (
                alt.Chart(filtered_data)
                .mark_bar()
                .encode(
                    x="Product:N",
                    y="Sales:Q",
                    tooltip=["Product", "Sales"]
                )
            )
            st.altair_chart(chart, use_container_width=True)

        # Download report
        csv_report = filtered_data.to_csv(index=False).encode("utf-8")
        st.download_button(
            label="📥 Download Report (CSV)",
            data=csv_report,
            file_name=f"{selected_city}_report.csv",
            mime="text/csv",
        )
    else:
        st.warning("⚠️ CSV file must contain a 'City' column.")
```

---
---


## Q23. What is LCEL (LangChain Expression Language)?

**Answer**

📝 LCEL is the `|` (pipe) syntax used to compose LangChain components (prompt, LLM, parser, retriever, etc.) into a single runnable chain. It's what powers `chain = prompt | llm | parser`.

```python
chain = prompt | llm | StrOutputParser()
result = chain.invoke({"topic": "AI"})
```

---

## Q24. What is a Retriever?

**Answer**

📝 A retriever fetches the most relevant documents/chunks from a vector store based on a query — the core piece of RAG (Retrieval-Augmented Generation).A Retriever is a component in LangChain that fetches relevant documents from a data source in response to a user's query.

**architecture**
```txt
              Query
                │
                ▼
           Retriever
           /       \
          /         \
Vector Store      Database
          \         /
           \       /
            ▼     ▼

       Relevant Documents
                │
                ▼
               LLM
```
Common Types of Retrievers
1. VectorStoreRetriever (Most Used)

Searches documents from a vector store using similarity search.
2. Similarity Retriever

Returns documents with highest similarity score.
3. MMR Retriever (Maximum Marginal Relevance)

Returns relevant and diverse documents.
4. MultiQueryRetriever

Generates multiple versions of a query using an LLM.
| Feature           | Vector Store           | Retriever            |
| ----------------- | ---------------------- | -------------------- |
| Purpose           | Stores embeddings      | Retrieves documents  |
| Stores Data       | ✅ Yes                  | ❌ No                 |
| Similarity Search | ✅ Yes                  | Uses Vector Store    |
| Returns Documents | ❌ Directly not focused | ✅ Yes                |
| Used In           | Storage Layer          | Retrieval Layer      |
| Example           | Chroma, FAISS          | VectorStoreRetriever |

```python
retriever = vectorstore.as_retriever(search_kwargs={"k": 3})
docs = retriever.invoke("What is LangChain?")
```

---

## Q25. What is RAG (Retrieval-Augmented Generation)?

**Answer**

📝 RAG combines a retriever with an LLM: relevant documents are fetched first, then passed into the prompt so the LLM answers using that context instead of relying only on its training data.

```
RAG
 ├── Document Loaders
 ├── Text Splitters
 ├── Vector Databases
 └── Retrievers
```

---

## Q26. What is an Embedding Model?

**Answer**

📝 Converts text into a numeric vector representation, used to measure semantic similarity between pieces of text (used for storing/searching in a vector DB).

```python
from langchain_openai import OpenAIEmbeddings

embedding = OpenAIEmbeddings()
vector = embedding.embed_query("LangChain framework")
```

---

## Q27. What are Output Parsers?

**Answer**

📝 Output Parsers in LangChain are used to convert the raw LLM response into a structured format that your application can easily process.

*They help in:*

- Formatting responses consistently
- Returning JSON, lists, objects, etc.
- Reducing manual parsing
- Making AI outputs reliable for automation

1. StrOutputParser:

StrOutputParser is the simplest output parser.It converts the LLM response into a plain string.

```python
from langchain_groq import ChatGroq
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key="YOUR_GROQ_API_KEY"
)

prompt = ChatPromptTemplate.from_template(
    "Explain LangChain in one sentence."
)

chain = prompt | llm | StrOutputParser()

response = chain.invoke({})

print(response)
```
2. JsonOutputParser:
JsonOutputParser forces the LLM to return output in JSON format.

```python
from langchain_groq import ChatGroq
from langchain_core.output_parsers import JsonOutputParser
from langchain_core.prompts import PromptTemplate

parser = JsonOutputParser()

prompt = PromptTemplate(
    template="""
    Give details about a programming language.

    {format_instructions}

    Language: {language}
    """,
    input_variables=["language"],
    partial_variables={
        "format_instructions": parser.get_format_instructions()
    }
)

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key="YOUR_GROQ_API_KEY"
)

chain = prompt | llm | parser

response = chain.invoke({
    "language": "Python"
})

print(response)
```

3. StructuredOutputParser:

StructuredOutputParser is used when you want the LLM to return data in a predefined structure with specific fields.

Unlike JsonOutputParser, where the model decides the JSON schema, StructuredOutputParser lets you define exactly what fields should be returned.

```python
from langchain_groq import ChatGroq
from langchain.output_parsers import ResponseSchema, StructuredOutputParser
from langchain_core.prompts import PromptTemplate

# Define output structure
schemas = [
    ResponseSchema(name="name", description="Person name"),
    ResponseSchema(name="city", description="Person city")
]

parser = StructuredOutputParser.from_response_schemas(schemas)

prompt = PromptTemplate(
    template="""
    Extract information from the text.

    {format_instructions}

    Text: {text}
    """,
    input_variables=["text"],
    partial_variables={
        "format_instructions": parser.get_format_instructions()
    }
)

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key="YOUR_GROQ_API_KEY"
)

chain = prompt | llm

response = chain.invoke({
    "text": "Rahul lives in Mumbai."
})

result = parser.parse(response.content)

print(result)
```
---

## Q28. What is `ChatPromptTemplate`? (Example)

**Answer**

📝 Used to build multi-role chat prompts (system/human/AI) with placeholders, instead of a single plain-text prompt.

```python
from langchain_core.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    ("human", "Tell me about {topic}")
])

formatted = prompt.format_messages(topic="LangChain")
```

---

## Q29. What is `MessagesPlaceholder`? (Example)

**Answer**

📝 A placeholder inside a `ChatPromptTemplate` that injects the full conversation history at runtime.

```python
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    MessagesPlaceholder(variable_name="chat_history"),
    ("human", "{input}")
])
```

---

## Q30. What are the Different Types of Memory in LangChain?

**Answer**

- **ConversationBufferMemory** — stores the full raw conversation
- **ConversationBufferWindowMemory** — stores only the last N messages
- **ConversationSummaryMemory** — stores a summarized version of the conversation (saves tokens)

```python
from langchain.memory import ConversationBufferWindowMemory

memory = ConversationBufferWindowMemory(k=3)  # keeps last 3 exchanges
```

---

## Q31. What is a Tool in LangChain?

**Answer**

📝 A tool is a function an agent can call to perform an action (e.g. search the web, run a calculation, query a database).A Tool is a Python function (or API) that is packaged in a way an LLM can understand and call when needed.

```txt

LLM
 ↓
Think
 ↓
Tool
 ↓
Take Action
```
**What is @tool Decorator?**

@tool converts a normal Python function into a LangChain Tool.
```python
from langchain_core.tools import tool

@tool
def multiply(a:int,b:int)->int:
    """Multiply two numbers"""

    return a*b
result = multiply.invoke({
    "a":10,
    "b":20
})

print(result)
```
Now LangChain can expose it to the LLM.

`Ways to Create Custom Tools`

- Using @tool decorator ✅ (Most Common)
- Using StructuredTool
- Using BaseTool (Advanced)

| Feature             | Tool                                         | Agent                                               |
| ------------------- | -------------------------------------------- | --------------------------------------------------- |
| Definition          | A function/API that performs a specific task | An AI system that can reason, decide, and use tools |
| Purpose             | Execute an action                            | Decide what action to take                          |
| Can Think?          | ❌ No                                         | ✅ Yes                                               |
| Can Take Action?    | ✅ Yes                                        | ✅ Yes                                               |
| Decision Making     | ❌ No                                         | ✅ Yes                                               |
| Tool Selection      | ❌ Cannot select tools                        | ✅ Chooses tools dynamically                         |
| Works Independently | ❌ No                                         | ✅ Yes                                               |
| Uses LLM Reasoning  | ❌ No                                         | ✅ Yes                                               |
| Input               | Direct function arguments                    | User query                                          |
| Output              | Task result                                  | Final answer after reasoning                        |
| Examples            | Weather API, Calculator, Ticket Booking      | ChatGPT Agent, Travel Agent, RAG Agent              |

**How Does an Agent Fetch Answers from Tools in LangChain?**

An Agent does not know the answer directly. Instead, it:

- Understands the user's question
- Decides which tool is needed
- Calls the tool
- Gets the tool's result
- Uses the result to generate the final answer

---

## Q32. What is the `temperature` Parameter?

**Answer**

📝 Controls the randomness/creativity of the model's output.
- **Low temperature (e.g. 0)** → more deterministic, focused answers
- **High temperature (e.g. 0.8–1)** → more creative, varied answers

```python
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)
```

---

## Q33. What is Streaming in LangChain?

**Answer**

📝 Streaming returns the model's output token-by-token as it's generated, instead of waiting for the full response — useful for chat UIs.

```python
for chunk in llm.stream("Tell me a story"):
    print(chunk.content, end="", flush=True)
```

---

## Q34. What is LangSmith?

**Answer**

📝 LangSmith is LangChain's observability/debugging platform for tracing, monitoring, and evaluating LLM applications (tracks prompts, chain steps, latency, and costs).

---

## Q35.What is Fine-Tuning?

**Answer**

Fine-Tuning is the process of training a pre-trained Large Language Model (LLM) on your own custom dataset so that it learns specific knowledge, style, behavior, or domain expertise.
