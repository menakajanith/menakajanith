from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, Chat
from telegram.ext import Application, CommandHandler, MessageHandler, filters
from telegram.ext import CallbackContext

# Series data with image file path, description, and download link
series_links = {
    "game of thrones": {
        "description": "Game of Thrones is a fantasy drama series based on the novels by George R.R. Martin.",
        "image": "game_of_thrones_poster.jpg",  # Local image file
        "link": "https://example.com/game_of_thrones_download_link"
    },
    "house of the dragon": {
        "description": "House of the Dragon is a prequel to Game of Thrones, focusing on the Targaryen family.",
        "image": "house_of_the_dragon_poster.jpg",  # Local image file
        "link": "https://example.com/house_of_the_dragon_download_link"
    },
    "breaking bad": {
        "description": "Breaking Bad follows the story of Walter White, a chemistry teacher turned methamphetamine kingpin.",
        "image": "breaking_bad_poster.jpg",  # Local image file
        "link": "https://example.com/breaking_bad_download_link"
    },
    "viking": {
        "description": "Vikings tells the story of the legendary Viking chieftain Ragnar Lothbrok and his descendants.",
        "image": "viking_poster.jpg",  # Local image file
        "link": "https://example.com/viking_download_link"
    },
}

async def start(update: Update, context: CallbackContext):
    if update.message.chat.type == Chat.PRIVATE:
        # If the message is from a private chat (inbox), send a different message
        await update.message.reply_text("Please join a group to use the bot.")
    else:
        # If the message is from a group, send the normal welcome message
        await update.message.reply_text("Hello! Tag me and send the name of a TV series or film, and I'll give you the download link and details.")

async def handle_message(update: Update, context: CallbackContext):
    # Check if the message is from a group
    if update.message.chat.type in [Chat.GROUP, Chat.SUPERGROUP]:  # Only respond in groups
        text = update.message.text.lower()  # Get the text of the message

        matched = False
        for series_name, details in series_links.items():
            if series_name.lower() in text:  # Match the name case-insensitively
                keyboard = [
                    [InlineKeyboardButton("🔥Download Now🔥", url=details['link'])]
                ]
                reply_markup = InlineKeyboardMarkup(keyboard)

                # Send image from local file
                with open(details['image'], 'rb') as image_file:
                    await update.message.reply_photo(
                        photo=image_file,  # Send the local image file
                        caption=f"**{series_name.title()}**\n{details['description']}\n\nClick below to download:",
                        reply_markup=reply_markup  # Attach the download button
                    )
                matched = True
                break

        if not matched:
            await update.message.reply_text("Sorry, I couldn't find a link for that series or movie.")
    else:
        print("Message is not from a group, ignoring.")  # Ignore messages not from groups

def main():
    print("Bot started")  # Debugging log
    application = Application.builder().token("7253304579:AAE9Xpz41BAGzhHBSn5CUyZGCSf5AWMv6Ws").build()

    # Adding handlers for start command and messages
    application.add_handler(CommandHandler("start", start))
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    # Start polling to handle incoming messages
    application.run_polling()

if __name__ == '__main__':
    main()
