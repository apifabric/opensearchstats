# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 20, 2024 06:46:12
# Database: sqlite:////tmp/tmp.z5Hp5cwXM8/opensearchstats/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Document(SAFRSBaseX, Base):
    """
    description: Stores documents that are indexed into OpenSearch.
    """
    __tablename__ = 'documents'
    _s_collection_name = 'Document'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    content = Column(Text, nullable=False)
    indexed_at = Column(DateTime, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class IndexingTask(SAFRSBaseX, Base):
    """
    description: Represents tasks related to indexing data in OpenSearch.
    """
    __tablename__ = 'indexing_tasks'
    _s_collection_name = 'IndexingTask'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    task_description = Column(Text, nullable=False)
    started_at = Column(DateTime, nullable=False)
    completed_at = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)



class OpensearchConfig(SAFRSBaseX, Base):
    """
    description: Contains configuration details for connecting to OpenSearch.
    """
    __tablename__ = 'opensearch_configs'
    _s_collection_name = 'OpensearchConfig'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    config_name = Column(String, nullable=False, unique=True)
    config_value = Column(Text, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class SystemLog(SAFRSBaseX, Base):
    """
    description: Logs system-related events and errors.
    """
    __tablename__ = 'system_logs'
    _s_collection_name = 'SystemLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    log_message = Column(Text, nullable=False)
    log_level = Column(String, nullable=False)
    created_at = Column(DateTime, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class User(SAFRSBaseX, Base):
    """
    description: Stores information about the users of the web app.
    """
    __tablename__ = 'users'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)

    # parent relationships (access parent)

    # child relationships (access children)
    QueryList : Mapped[List["Query"]] = relationship(back_populates="user")
    UserActivityList : Mapped[List["UserActivity"]] = relationship(back_populates="user")
    UserSessionList : Mapped[List["UserSession"]] = relationship(back_populates="user")
    BookmarkList : Mapped[List["Bookmark"]] = relationship(back_populates="user")
    FeedbackList : Mapped[List["Feedback"]] = relationship(back_populates="user")



class Query(SAFRSBaseX, Base):
    """
    description: Represents searches made by users to OpenSearch.
    """
    __tablename__ = 'queries'
    _s_collection_name = 'Query'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    query_text = Column(Text, nullable=False)
    executed_at = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("QueryList"))

    # child relationships (access children)
    BookmarkList : Mapped[List["Bookmark"]] = relationship(back_populates="query")
    FeedbackList : Mapped[List["Feedback"]] = relationship(back_populates="query")
    QueryStatisticList : Mapped[List["QueryStatistic"]] = relationship(back_populates="query")
    SearchResultList : Mapped[List["SearchResult"]] = relationship(back_populates="query")



class UserActivity(SAFRSBaseX, Base):
    """
    description: Tracks user activities within the web application.
    """
    __tablename__ = 'user_activities'
    _s_collection_name = 'UserActivity'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    activity_description = Column(Text, nullable=False)
    timestamp = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserActivityList"))

    # child relationships (access children)



class UserSession(SAFRSBaseX, Base):
    """
    description: Manages user sessions for authentication.
    """
    __tablename__ = 'user_sessions'
    _s_collection_name = 'UserSession'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    session_token = Column(String, nullable=False)
    login_time = Column(DateTime, nullable=False)
    logout_time = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserSessionList"))

    # child relationships (access children)



class Bookmark(SAFRSBaseX, Base):
    """
    description: Allows users to save certain search results for quick access.
    """
    __tablename__ = 'bookmarks'
    _s_collection_name = 'Bookmark'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    query_id = Column(ForeignKey('queries.id'), nullable=False)
    notes = Column(Text)

    # parent relationships (access parent)
    query : Mapped["Query"] = relationship(back_populates=("BookmarkList"))
    user : Mapped["User"] = relationship(back_populates=("BookmarkList"))

    # child relationships (access children)



class Feedback(SAFRSBaseX, Base):
    """
    description: Collects user feedback on their search results.
    """
    __tablename__ = 'feedbacks'
    _s_collection_name = 'Feedback'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    query_id = Column(ForeignKey('queries.id'), nullable=False)
    feedback_text = Column(Text)
    rating = Column(Integer)

    # parent relationships (access parent)
    query : Mapped["Query"] = relationship(back_populates=("FeedbackList"))
    user : Mapped["User"] = relationship(back_populates=("FeedbackList"))

    # child relationships (access children)



class QueryStatistic(SAFRSBaseX, Base):
    """
    description: Analyzes and stores statistics about query durations and results.
    """
    __tablename__ = 'query_statistics'
    _s_collection_name = 'QueryStatistic'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    query_id = Column(ForeignKey('queries.id'), nullable=False)
    execution_time_ms = Column(Float, nullable=False)
    result_count = Column(Integer, nullable=False)

    # parent relationships (access parent)
    query : Mapped["Query"] = relationship(back_populates=("QueryStatisticList"))

    # child relationships (access children)



class SearchResult(SAFRSBaseX, Base):
    """
    description: Stores results obtained from OpenSearch for each query.
    """
    __tablename__ = 'search_results'
    _s_collection_name = 'SearchResult'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    query_id = Column(ForeignKey('queries.id'), nullable=False)
    result_text = Column(Text, nullable=False)
    relevance_score = Column(Float)

    # parent relationships (access parent)
    query : Mapped["Query"] = relationship(back_populates=("SearchResultList"))

    # child relationships (access children)
