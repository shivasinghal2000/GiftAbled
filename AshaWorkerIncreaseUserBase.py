# -*- coding: utf-8 -*-

# importing the client from the twilio
from twilio.rest import Client
import xlrd

# Your Account Sid and Auth Token from twilio account
account_sid = ACCOUNT_SID
auth_token = AUTH_TOKEN

# instantiating the Client
client = Client(account_sid, auth_token)
# Give the location of the file
loc = EXCEL_SHEET_PATH
 
wb = xlrd.open_workbook(loc)
sheet = wb.sheet_by_index(0)

#If structure of excel changes, code will change
#1st column has contact numbers and 2nd column has user names
for i in range(sheet.nrows):
    if (i==0):
        continue
    client.messages.create(body='Hello ' + sheet.cell_value(i, 1) + ', with Giftabled we aim at identifying disability at a younger age by tracking development delay in children. To access our facilities and know more login to ' + WEB_APPLICATION_LINK, from_="+13237468040"
, to="+91"+ str(int(sheet.cell_value(i, 0))))



 
