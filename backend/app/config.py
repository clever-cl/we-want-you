from pydantic import BaseSettings


class Settings(BaseSettings):

    spotify_cliend_id: str = "1dfa90f11a6e4ea8968ce90cd07fa0ba"
    spotify_cliend_secret: str = "7090e5aede684916ab2e44fa25496375"
    # admin_email: str
    # items_per_user: int = 50


settings = Settings()