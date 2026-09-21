#!/usr/bin/env python3
"""Generate the simulated fake tender notice demo asset for VeriVoice.
Produces a crisp, realistic mock 'fake tender notice' used to demonstrate
the problem VeriVoice solves. Clearly flagged as SIMULATED in all deliverables.
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1100, 1550
BG = (255, 255, 255)
GREEN = (0, 102, 51)
RED = (178, 24, 24)
DARK = (28, 28, 30)
GREY = (90, 90, 95)

S = "/usr/share/fonts/truetype/dejavu/"
def F(name, size):
    return ImageFont.truetype(S + name, size)

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# top green band with "coat of arms" placeholder (drawn shield + text)
d.rectangle([0, 0, W, 240], fill=GREEN)
# simple shield
d.polygon([(120, 40), (200, 40), (200, 130), (160, 175), (120, 130)], fill=(250, 250, 250))
d.polygon([(120, 40), (200, 40), (200, 130), (160, 175), (120, 130)], outline=GREEN)
d.text((150, 75), "★", fill=GREEN, font=F("DejaVuSans-Bold.ttf", 40))
d.text((240, 55), "COUNTY GOVERNMENT OF NAIROBI", fill=(255, 255, 255), font=F("DejaVuSans-Bold.ttf", 44))
d.text((240, 125), "OFFICE OF THE DIRECTOR OF PROCUREMENT", fill=(220, 235, 225), font=F("DejaVuSans.ttf", 32))
d.text((240, 170), "P.O. Box 30010-00100, Nairobi  |  www.nairobi.go.ke", fill=(200, 220, 205), font=F("DejaVuSans.ttf", 24))

# red inner frame
d.rectangle([28, 268, W - 28, H - 60], outline=RED, width=6)

# heading
d.text((W // 2, 320), "TENDER NOTICE", fill=DARK, anchor="ma", font=F("DejaVuSans-Bold.ttf", 60))
d.text((W // 2, 400), "INVITATION TO TENDER — OPEN NATIONAL", fill=GREY, anchor="ma", font=F("DejaVuSans-Bold.ttf", 26))

def para(y, text, font, fill=DARK, indent=70, leading=46):
    x = indent
    for word in text.split():
        w = d.textlength(word + " ", font=font)
        if x + w > W - 70:
            x = indent
            y += leading
        d.text((x, y), word + " ", fill=fill, font=font)
        x += w
    return y + leading

f_body = F("DejaVuSans.ttf", 30)
f_bold = F("DejaVuSans-Bold.ttf", 30)

y = 470
y = para(y, "Tender Reference No: NRB/TED/2026/047", f_bold)
y = para(y, "The County Government of Nairobi, through the Department of Water, Energy and Natural Resources, invites sealed bids from eligible and registered bidders for the following tender:", f_body)
y = para(y, "TENDER NAME: SUPPLY AND DELIVERY OF 500 STEEL WATER PIPES (DN300)", f_bold)
y = para(y, "CLOSING DATE: 30th September 2026 at 12:00 NOON (EAT)", f_bold)
y += 10
y = para(y, "MANDATORY REGISTRATION:", f_bold)
y = para(y, "All interested bidders MUST first register by paying a NON-REFUNDABLE tender registration fee of KSh 5,500 to M-PESA Paybill 522 334, Account Name: TENDER REG. Payment confirmation must be emailed before closing date.", f_body)
y = para(y, "NOTE: This tender is URGENT and time-sensitive. Unregistered or walk-in bidders will be automatically disqualified.", f_body, fill=RED)
y += 6
y = para(y, "For inquiries, quotations and registration confirmation, contact the undersigned strictly by phone or email:", f_body)
y = para(y, "Mr. J. Kimani — Procurement Officer", f_bold)
y = para(y, "Mobile: 0712 345 678   |   Email: countyprocurement2026@gmail.com", f_bold, fill=RED)
y += 14
y = para(y, "DO NOT visit the county procurement offices. All communication for this tender is via phone and email ONLY.", f_body, fill=RED)
y += 30
d.text((70, H - 220), "Dated this 15th day of September, 2026", fill=DARK, font=f_body)
d.text((70, H - 150), "J. KIMANI", fill=DARK, font=f_bold)
d.text((70, H - 108), "FOR: DIRECTOR OF PROCUREMENT", fill=GREY, font=f_body)
d.line([(70, H - 260), (W - 70, H - 260)], fill=GREY, width=2)

img.save("demo-assets/fake_tender_notice_simulated.png")
print("saved", img.size)
