#!/bin/bash

echo "姓 名"
echo -e "\033[0;34mFirst name:\033[0m"
read -r firstname

echo -e "\033[0;34mLast name:\033[0m"
read -r lastname

echo -e "\033[0;34mWhat are your favorite editors? (enter numbers only)
 1) Vim
 2) Emacs
 3) Atom
 4) Brackets\033[0m"
read -r selection

editors=""
if [[ "$selection" =~ ^.*1.*$ ]]; then editors+="Vim "; fi
if [[ "$selection" =~ ^.*2.*$ ]]; then editors+="Emacs "; fi
if [[ "$selection" =~ ^.*3.*$ ]]; then editors+="Atom "; fi
if [[ "$selection" =~ ^.*4.*$ ]]; then editors+="Brackets "; fi

echo -e "\033[0;34mDo you like Blessed? (y/n)\033[0m"
read -r blessed

echo -e "\033[0;34mYour comments...\033[0m"
read -r comments

echo "$firstname $lastname
--------------------------
Favorite editors: $editors
Likes Blessed: $blessed
Comments: $comments" > data.txt
