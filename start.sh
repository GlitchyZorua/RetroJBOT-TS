#!/usr/bin/env sh
# Useful resource on whiptail: https://www.redhat.com/sysadmin/use-whiptail
# Configure background title here
bgTitle="RetroJBOT Runtime Manager"


# Check for whiptail package
if [ ! -x "$(command -v whiptail)" ]; then
  printf "The 'whiptail' command is missing. Please install the package containing whiptail and try again.\n" 
  exit 1
fi

xmessage "The Runtime Manager is a bit unstable. if shit breaks all because of my lovely hacks and poor programming, let me know on GitHub or whatever. thanks for your understanding"

# Main menu
response=$(whiptail --cancel-button Exit \
  --backtitle "$bgTitle" \
  --title "What would you like to do?" \
  --menu "" 0 0 0 \
  1 "Start NPM" \
  2 "ENV Settings" \
3>&1 1>&2 2>&3)

if [ -z "$response" -eq 1 ]; then
  # Fuck this shit I'm out
  exit 0
elif [ "$response" -eq 2 ]; then
 vim .env
fi

# Otherwise, proceed to the NPM menu

# But first prepare the start function
startBot() {
 npm ci
 npm run build
 npm run start
}

response=$(whiptail \
  --backtitle "$bgTitle" \
  --title "Enable Loop Mode Or halt when crash?" \
  --menu "" 0 0 0 \
  1 "loop mode (recommended)" \
  2 "Halt when crash" \
3>&1 1>&2 2>&3)

if [ -z "$response" ]; then
  # Cancel? How about exit instead
  exit 0
elif [ "$response" -eq 1 ]; then
  # How to exit message
  whiptail \
  --backtitle "$bgTitle" \
  --title "How to exit loop mode" \
  --msgbox "To exit loop mode, press Ctrl+C, Ctrl+D, or a combination of the two." 0 0
  
  # Loop this thing forever
  while true; do
    startBot
  done
else
  # Or, you know, just run it once and wait for something to fuck it up
  startBot
fi