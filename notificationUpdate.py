# -*- coding: utf-8 -*-
from twilio.rest import Client
from firebase_admin import firestore
from datetime import date

def sendMessage(PrevMonth, link, phone):
    
    # Your Account Sid and Auth Token from twilio account
    account_sid = ACCOUNT_SID
    auth_token = AUTH_TOKEN
    
    # instantiating the Client
    client = Client(account_sid, auth_token)
    client.messages.create(body='\nHello from GiftAbled, your last Disablility Tracker Form was submitted in '+ PrevMonth + ' . \nKindly, take the form again. To access it open : ' + link  , from_=REGISTERED_NUMBER
    , to=phone)

#firebase_admin.initialize_app(cred)
db = firestore.client()


result = db.collection("disabletracker").get()

todays_date = date.today()  
currentMonth= todays_date.month
currentYear= todays_date.year

MonthList = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
for val in result:
    timeStamp= val.get('date')
    phone= val.get('phone')
    
    DateList = []
    DateList= timeStamp.split(" ")
    submittedMonth= DateList[2]
    submittedYear= DateList[3]
    submittedMonthIndex= MonthList.index(submittedMonth,0,12)
    
    currentMonth= (currentYear-int(submittedYear))*12 + currentMonth
    if((currentMonth-submittedMonthIndex) ==3):
        sendMessage(submittedMonth,WEB_APPLICATION_LINK, phone);
    
    


