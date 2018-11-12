require 'httparty'
require 'json'

class NapsterAPI

url = 'https://api.spotify.com/v1/search?type=artist&q=tycho'
response = HTTParty.get(url)
response.parsed_response
