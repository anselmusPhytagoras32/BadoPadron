from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.engine import URL
import os
from dotenv import load_dotenv

load_dotenv()
db_pass = os.getenv("DB_PASSWORD")

url = URL.create(
    drivername="mysql+pymysql",
    username="root", #Change later for security
    password=db_pass, 
    host="localhost",
    database="SukatDB",
    port=3306
)

engine = create_engine(url)
Session = sessionmaker(bind=engine)
session = Session