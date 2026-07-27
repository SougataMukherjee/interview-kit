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

## Q5. What is a Chat Model?

**Answer**

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

## Q11. What is a Chain?

**Answer**

📝 A chain connects multiple LangChain components together.

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

## Q17. Why Use a Vector DB?

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

## Q18. What is a Document Loader?

**Answer**

📝 Loads files into LangChain.

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

📝 Breaks large documents into chunks.

```python
from langchain_text_splitters import RecursiveCharacterTextSplitter

text = """
Artificial Intelligence (AI) is a field of computer science
that focuses on creating systems capable of performing tasks
that normally require human intelligence.
""" * 20

splitter = RecursiveCharacterTextSplitter(
    chunk_size=100,
    chunk_overlap=20
)

chunks = splitter.split_text(text)

print("Number of chunks:", len(chunks))

for i, chunk in enumerate(chunks):
    print(f"\nChunk {i+1}:")
    print(chunk)
	-----------------------
	q20
	from pydantic import BaseModel
from langchain_groq import ChatGroq

class Person(BaseModel):
    name: str
    age: int

llm = ChatGroq(
    model="llama-3.3-70b-versatile"
)

structured_llm = llm.with_structured_output(Person)

person = structured_llm.invoke(
    "My name is Sougata and I am 30 years old."
)

print(person)
print(person.name)
print(person.age)
```

---

## Q20. What is Structured Output?

**Answer**

📝 Returns output in JSON/Pydantic format.

```python
from pydantic import BaseModel

class Person(BaseModel):
    name: str
    age: int
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

📝 A retriever fetches the most relevant documents/chunks from a vector store based on a query — the core piece of RAG (Retrieval-Augmented Generation).

```python
retriever = vectorstore.as_retriever(search_kwargs={"k": 3})
docs = retriever.invoke("What is LangChain?")
```

---

## Q25. What is RAG (Retrieval-Augmented Generation)?

**Answer**

📝 RAG combines a retriever with an LLM: relevant documents are fetched first, then passed into the prompt so the LLM answers using that context instead of relying only on its training data.

```
User Query → Retriever → Relevant Docs → Prompt + Docs → LLM → Answer
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

📝 Convert raw LLM output into a specific format (string, JSON, Pydantic object).

```python
from langchain_core.output_parsers import StrOutputParser, JsonOutputParser

str_parser = StrOutputParser()   # returns plain string
json_parser = JsonOutputParser()  # parses model output as JSON
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

📝 A tool is a function an agent can call to perform an action (e.g. search the web, run a calculation, query a database).

```python
from langchain.tools import tool

@tool
def add(a: int, b: int) -> int:
    """Add two numbers."""
    return a + b
```

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
