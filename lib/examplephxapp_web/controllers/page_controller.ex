defmodule ExamplephxappWeb.PageController do
  use ExamplephxappWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
