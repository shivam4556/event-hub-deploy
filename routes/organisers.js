const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Organiser = require("../models/Organiser");

router.post("/login", function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

  Organiser.findOne({ email: email }, async function (err, foundCompany) {
    if (err) {
      console.log(err);
    } else {
      if (foundCompany) {
        const isMatch = await bcrypt.compare(password, foundCompany.password);

        if (isMatch) {
          res.send({ found: true, id: foundCompany._id });
        } else {
          res.send({ found: "incorrect" });
        }
      } else {
        res.send({ found: "incorrect" });
      }
    }
  });
});
router.post("/register", function (req, res) {
  Organiser.find(
    { email: req.body.email },
    async function (err, foundOrganisers) {
      if (foundOrganisers.length === 0) {
        const newOrganiser = new Organiser({
          company_name: req.body.name,
          email: req.body.email,
          address: req.body.address,
          password: req.body.password,
          mobile_no: req.body.mobile,
          landline_no: req.body.landline,
          state: req.body.state,
          city: req.body.city,
          pincode: req.body.pincode,
          budget: {
            min: req.body.minPrice,
            max: req.body.maxPrice,
          },
          bio: req.body.bio,
        });

        newOrganiser.save();

        res.send({ valid: true, id: newOrganiser._id });
      } else {
        res.send("Organiser already registered");
      }
    }
  );
});
router.get("/portfolio/:id", (req, res) => {
  var id = req.params.id;
  Organiser.findOne({ _id: id }, (err, foundCompany) => {
    res.send({
      company_name: foundCompany.company_name,
      email: foundCompany.email,
      address: foundCompany.address,
      mobile_no: foundCompany.mobile_no,
      landline_no: foundCompany.landline_no,
      state: foundCompany.state,
      city: foundCompany.city,
      pincode: foundCompany.pincode,
      states: foundCompany.states,
      events: foundCompany.events,
      faqs: foundCompany.faqs,
      description: foundCompany.description,
      portfolio_home: foundCompany.portfolio_home,
      portfolio_about: foundCompany.portfolio_about,
      portfolio_services: foundCompany.portfolio_services,
      portfolio_photos: foundCompany.portfolio_photos,
      socialMediaHandles: foundCompany.socialMediaHandles,
      budget: foundCompany.budget,
      bio: foundCompany.bio,
    });
  });
});

router.patch("/portfolio/setStates/:event/:id", function (req, res) {
  switch (req.params.event) {
    case "AllEvents": {
      Organiser.updateOne(
        { _id: req.params.id },
        {
          $addToSet: {
            states: req.body.states,
            "events.AllEvents": req.body.states,
          },
        },
        function (err) {
          if (err) {
            console.log(err);
          } else {
            res.send("Successfully updated");
          }
        }
      );
      break;
    }
    case "Birthday": {
      Organiser.updateOne(
        { _id: req.params.id },
        {
          $addToSet: {
            "events.Birthday": req.body.states,
          },
        },
        function (err) {
          if (err) {
            console.log(err);
          } else {
            res.send("Successfully updated");
          }
        }
      );
      break;
    }
    case "Reception": {
      Organiser.updateOne(
        { _id: req.params.id },
        {
          $addToSet: {
            "events.Reception": req.body.states,
          },
        },
        function (err) {
          if (err) {
            console.log(err);
          } else {
            res.send("Successfully updated");
          }
        }
      );
      break;
    }
    case "Engagement": {
      Organiser.updateOne(
        { _id: req.params.id },
        {
          $addToSet: {
            "events.Engagement": req.body.states,
          },
        },
        function (err) {
          if (err) {
            console.log(err);
          } else {
            res.send("Successfully updated");
          }
        }
      );
      break;
    }
    case "Wedding": {
      Organiser.updateOne(
        { _id: req.params.id },
        {
          $addToSet: {
            "events.Wedding": req.body.states,
          },
        },
        function (err) {
          if (err) {
            console.log(err);
          } else {
            res.send("Successfully updated");
          }
        }
      );
      break;
    }
  }
});
router.patch("/portfolio/:section/:name/:id", function (req, res) {
  if (req.params.section === "Home") {
    if (req.params.name === "title") {
      Organiser.updateOne(
        { _id: req.params.id },
        {
          $set: {
            "portfolio_home.title": req.body.title,
          },
        },
        function (err) {
          if (err) {
            console.log(err);
          }
        }
      );
    } else if (req.params.name === "description") {
      Organiser.updateOne(
        { _id: req.params.id },
        {
          $set: {
            "portfolio_home.description": req.body.description,
          },
        },
        function (err) {
          if (err) {
            console.log(err);
          }
        }
      );
    } else if (req.params.name === "website") {
      Organiser.updateOne(
        { _id: req.params.id },
        {
          $set: {
            "portfolio_home.website": req.body.website,
          },
        },
        function (err) {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  } else if (req.params.section === "About") {
    Organiser.updateOne(
      { _id: req.params.id },
      { $set: { "portfolio_about.description": req.body.description } },
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  } else if (req.params.section === "Services") {
    if (req.params.name === "description") {
      Organiser.updateOne(
        { _id: req.params.id },
        {
          $set: {
            "portfolio_services.description": req.body.description,
          },
        },
        function (err) {
          if (err) {
            console.log(err);
          } else {
            res.send("Successfully updated");
          }
        }
      );
    } else if (req.params.name === "states") {
      Organiser.updateOne(
        { _id: req.params.id },
        {
          $addToSet: {
            states: req.body.states,
            "events.AllEvents": req.body.states,
          },
        },
        function (err) {
          if (err) {
            console.log(err);
          } else {
            res.send("Successfully updated");
          }
        }
      );
    }
  } else if (req.params.section === "Portfolio") {
    Organiser.updateOne(
      { _id: req.params.id },
      {
        $set: {
          "portfolio_photos.description": req.body.description,
        },
      },
      function (err) {
        if (err) {
          console.log(err);
        } else {
          res.send("Successfully updated");
        }
      }
    );
  }
});

router.get("/filter", (req, res) => {
  Organiser.find((err, foundOrganiser) => {
    res.send(foundOrganiser);
  });
});

module.exports = router;
