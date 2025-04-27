import { Router } from "express";

const SubscriptionRouter = Router();

SubscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GET all subscription" });
});

SubscriptionRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ title: `GET subscription with id ${id}` });
});

SubscriptionRouter.post("/", (req, res) => {
  res.send({ title: "CREATE new subscription" });
});

SubscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: `UPDATE subscription with id ${req.params.id}}` });
});

SubscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: `DELETE subscription with id ${req.params.id}` });
});

SubscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: `GET all user subscriptions ` });
});

SubscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: `CANCEL subscription ` });
});

SubscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: `GET all upcoming renewals` });
});

export default SubscriptionRouter;
