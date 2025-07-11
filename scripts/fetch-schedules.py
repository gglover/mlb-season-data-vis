import sys
import statsapi
import json
import time
from pprint import pprint

# Safe bounds for the offseason.
# Unless MLB schedules a unprecedented early season series we should be safe with these.
SEASON_START = '03/1'
SEASON_END = '10/30'

if len(sys.argv) > 1:
    print("Processing season:", sys.argv[1])
else:
    print("Error: Please provide the season's year.")
    exit()

year = sys.argv[1]

with open('data/teams.json', 'r', encoding='utf-8') as file:
    team_json = json.load(file)
    team_ids = [team["id"] for team in team_json]

    for team_id in team_ids:
        games = statsapi.schedule(start_date=f'{SEASON_START}/{year}', end_date=f'{SEASON_END}/{year}', team=team_id)
        time.sleep(10)

        print(team_id)

        with open(f'scripts/data_{year}/{team_id}.json', 'w', encoding='utf-8') as f:
            json.dump(games, f, ensure_ascii=False, indent=4)

 

