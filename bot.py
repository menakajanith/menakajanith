import mysql.connector
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, MessageHandler, filters
from telegram.ext import CallbackContext
import os

# MySQL Database connection setup
def get_db_connection():
    conn = mysql.connector.connect(
        host="44.222.237.81",        # MySQL server address
        user="root",             # MySQL user
        password="menaka",    # MySQL password
        database="rog"           # MySQL database name
    )
    return conn

# Series table creation function
def create_table():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS series (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            image VARCHAR(255),
            download_link VARCHAR(255)
        )
    """)
    conn.commit()
    conn.close()

# Insert Series Data into DB
def insert_series_data(series_name, description, image, download_link):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO series (name, description, image, download_link)
        VALUES (%s, %s, %s, %s)
    """, (series_name, description, image, download_link))
    conn.commit()
    conn.close()

# Fetch series data from DB
def get_series_data(series_name):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM series WHERE name = %s", (series_name,))
    series_data = cursor.fetchone()
    conn.close()
    return series_data

# Handle bot's start command
async def start(update: Update, context: CallbackContext):
    await update.message.reply_text("Welcome! Send me a series name and I'll give you the details.")

# Handle incoming messages
async def handle_message(update: Update, context: CallbackContext):
    if update.message.chat.type in [Chat.GROUP, Chat.SUPERGROUP]:
        text = update.message.text.lower()
        matched = False

        for series_name in series_links.keys():
            if series_name.lower() in text:
                series_data = get_series_data(series_name)
                if series_data:
                    keyboard = [
                        [InlineKeyboardButton("🔥Download Now🔥", url=series_data['download_link'])]
                    ]
                    reply_markup = InlineKeyboardMarkup(keyboard)

                    # Send image path and series details
                    image_path = series_data['image']
                    if os.path.exists(image_path):
                        with open(image_path, 'rb') as image_file:
                            await update.message.reply_photo(
                                photo=image_file,
                                caption=f"**{series_name.title()}**\n{series_data['description']}\n\nClick below to download:",
                                reply_markup=reply_markup
                            )
                matched = True
                break

        if not matched:
            await update.message.reply_text("Sorry, I couldn't find a link for that series or movie.")
    else:
        print("Message is not from a group, ignoring.")

def main():
    print("Bot started")
    application = Application.builder().token("7253304579:AAE9Xpz41BAGzhHBSn5CUyZGCSf5AWMv6Ws").build()

    # Handlers for start command and messages
    application.add_handler(CommandHandler("start", start))
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    # Create table if not exists
    create_table()

    # Insert initial series data
    insert_series_data("Game of Thrones", "Fantasy drama series...", "game_of_thrones_poster.jpg", "https://example.com/game_of_thrones")
    
    application.run_polling()

if __name__ == '__main__':
    main()
