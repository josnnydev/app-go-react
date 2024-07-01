package main

import (
	"github.com/gofiber/fiber/v3"
	"github.com/gofiber/fiber/v3/middleware/cors"
	"github.com/gofiber/fiber/v3/middleware/static"
)

func main()  {
	app := fiber.New()

	app.Use(cors.New())
	app.Use("/", static.New("./client/dist"))

	

	app.Get("/users",func(c fiber.Ctx) error {
		return c.JSON(&fiber.Map{
			"data": "Users from backend",
		})
	})

	app.Listen(":3000")

	
}