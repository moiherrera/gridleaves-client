curl "https://gridleaves.herokuapp.com/profiles/" \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
    "profile": {
    "name": "'"${NAME}"'",
    "location": "'"${LOCATION}"'",
    "image_link": "'"${IMG}"'",
    "personal_assets": "'"${PERSONAL}"'",
    "professional_interests": "'"${PRO}"'",
    "hobbies": "'"${HOBBIES}"'",
    "projects": "'"${PROJECTS}"'",
    "contact_info": "'"${CONTACT}"'",
    "express": "'"${EXPRESS}"'",
    "age": "'"${AGE}"'",
    "pronouns": "'"${PRONOUNS}"'",
    "community_assets": "'"${COMMUNITY}"'"
    }
    }'
    echo
