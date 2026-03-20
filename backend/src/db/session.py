from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.engine import URL
import os
from dotenv import load_dotenv

load_dotenv()
db_pass = os.getenv("DB_PASSWORD")
db_username = os.getenv("DB_USERNAME")
db_host = os.getenv("DB_HOST")
db_name = os.getenv("DB_NAME")

url = URL.create(
    drivername="mysql+pymysql",
    username=db_username,
    password=db_pass, 
    host=db_host,
    database=db_name,
    port=3306
)

engine = create_engine(url)
Session = sessionmaker(bind=engine)
session = Session