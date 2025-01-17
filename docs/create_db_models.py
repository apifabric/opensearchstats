# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Float, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

# Define the database location
DATABASE_URI = 'sqlite:///system/genai/temp/create_db_models.sqlite'

# Set up the base class for declarative mode
Base = declarative_base()

class User(Base):
    """description: Stores information about the users of the web app."""
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)

class Query(Base):
    """description: Represents searches made by users to OpenSearch."""
    __tablename__ = 'queries'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    query_text = Column(Text, nullable=False)
    executed_at = Column(DateTime, default=datetime.utcnow, nullable=False)

class SearchResult(Base):
    """description: Stores results obtained from OpenSearch for each query."""
    __tablename__ = 'search_results'
    id = Column(Integer, primary_key=True, autoincrement=True)
    query_id = Column(Integer, ForeignKey('queries.id'), nullable=False)
    result_text = Column(Text, nullable=False)
    relevance_score = Column(Float)

class UserActivity(Base):
    """description: Tracks user activities within the web application."""
    __tablename__ = 'user_activities'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    activity_description = Column(Text, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow, nullable=False)

class SystemLog(Base):
    """description: Logs system-related events and errors."""
    __tablename__ = 'system_logs'
    id = Column(Integer, primary_key=True, autoincrement=True)
    log_message = Column(Text, nullable=False)
    log_level = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

class QueryStatistics(Base):
    """description: Analyzes and stores statistics about query durations and results."""
    __tablename__ = 'query_statistics'
    id = Column(Integer, primary_key=True, autoincrement=True)
    query_id = Column(Integer, ForeignKey('queries.id'), nullable=False)
    execution_time_ms = Column(Float, nullable=False)
    result_count = Column(Integer, nullable=False)

class UserSession(Base):
    """description: Manages user sessions for authentication."""
    __tablename__ = 'user_sessions'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    session_token = Column(String, nullable=False)
    login_time = Column(DateTime, default=datetime.utcnow, nullable=False)
    logout_time = Column(DateTime)

class IndexingTask(Base):
    """description: Represents tasks related to indexing data in OpenSearch."""
    __tablename__ = 'indexing_tasks'
    id = Column(Integer, primary_key=True, autoincrement=True)
    task_description = Column(Text, nullable=False)
    started_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    completed_at = Column(DateTime)

class Document(Base):
    """description: Stores documents that are indexed into OpenSearch."""
    __tablename__ = 'documents'
    id = Column(Integer, primary_key=True, autoincrement=True)
    content = Column(Text, nullable=False)
    indexed_at = Column(DateTime, default=datetime.utcnow, nullable=False)

class OpenSearchConfig(Base):
    """description: Contains configuration details for connecting to OpenSearch."""
    __tablename__ = 'opensearch_configs'
    id = Column(Integer, primary_key=True, autoincrement=True)
    config_name = Column(String, nullable=False, unique=True)
    config_value = Column(Text, nullable=False)

class Bookmark(Base):
    """description: Allows users to save certain search results for quick access."""
    __tablename__ = 'bookmarks'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    query_id = Column(Integer, ForeignKey('queries.id'), nullable=False)
    notes = Column(Text)

class Feedback(Base):
    """description: Collects user feedback on their search results."""
    __tablename__ = 'feedbacks'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    query_id = Column(Integer, ForeignKey('queries.id'), nullable=False)
    feedback_text = Column(Text)
    rating = Column(Integer)

# Create the database engine
engine = create_engine(DATABASE_URI)

# Create all tables in the engine
Base.metadata.create_all(engine)

# Create a configured "Session" class and a session
Session = sessionmaker(bind=engine)
session = Session()

# Create initial data
user1 = User(username="alice", email="alice@example.com")
user2 = User(username="bob", email="bob@example.com")
session.add_all([user1, user2])
session.commit()

query1 = Query(user_id=1, query_text="Python programming tutorial")
query2 = Query(user_id=2, query_text="Install OpenSearch guide")
session.add_all([query1, query2])
session.commit()

search_result1 = SearchResult(query_id=1, result_text="Python Tutorial for Beginners", relevance_score=0.9)
search_result2 = SearchResult(query_id=2, result_text="Setting up OpenSearch on Ubuntu", relevance_score=0.85)
session.add_all([search_result1, search_result2])
session.commit()

user_activity1 = UserActivity(user_id=1, activity_description="Logged in and performed a search.")
user_activity2 = UserActivity(user_id=2, activity_description="Marked a search result as favourite.")
session.add_all([user_activity1, user_activity2])
session.commit()

system_log1 = SystemLog(log_message="Database connection established.", log_level="INFO")
system_log2 = SystemLog(log_message="User login attempt failed.", log_level="ERROR")
session.add_all([system_log1, system_log2])
session.commit()

query_stat1 = QueryStatistics(query_id=1, execution_time_ms=120.5, result_count=10)
query_stat2 = QueryStatistics(query_id=2, execution_time_ms=145.3, result_count=8)
session.add_all([query_stat1, query_stat2])
session.commit()

user_session1 = UserSession(user_id=1, session_token="abcd1234", login_time=datetime.utcnow())
user_session2 = UserSession(user_id=2, session_token="abcd5678", login_time=datetime.utcnow(), logout_time=datetime.utcnow())
session.add_all([user_session1, user_session2])
session.commit()

indexing_task1 = IndexingTask(task_description="Indexing new documents", started_at=datetime.utcnow(), completed_at=datetime.utcnow())
indexing_task2 = IndexingTask(task_description="Re-indexing data", started_at=datetime.utcnow())
session.add_all([indexing_task1, indexing_task2])
session.commit()

document1 = Document(content="Understanding SQLAlchemy ORM", indexed_at=datetime.utcnow())
document2 = Document(content="Introduction to OpenSearch", indexed_at=datetime.utcnow())
session.add_all([document1, document2])
session.commit()

open_search_config1 = OpenSearchConfig(config_name="max_retries", config_value="3")
open_search_config2 = OpenSearchConfig(config_name="timeout", config_value="60s")
session.add_all([open_search_config1, open_search_config2])
session.commit()

bookmark1 = Bookmark(user_id=1, query_id=1, notes="Good article for future reference.")
bookmark2 = Bookmark(user_id=2, query_id=2)
session.add_all([bookmark1, bookmark2])
session.commit()

feedback1 = Feedback(user_id=1, query_id=1, feedback_text="Very helpful tutorial!", rating=5)
feedback2 = Feedback(user_id=2, query_id=2, rating=4)
session.add_all([feedback1, feedback2])
session.commit()

# Close the session
session.close()
