const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const axios = require("axios");

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// Get All Roles
app.get("/api/ClientStrive/GetAllRoles", async (req, res) => {
  try {
    const response = await axios.get(
      "https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles"
    );
    res.status(200).json({
      status: true,
      message: "Roles fetched successfully",
      data: response.data,
    });
  } catch (err) {
    console.error("Error fetching roles:", err.message);
    res.status(500).json({
      status: false,
      message: "Failed to fetch roles",
      error: err.message,
    });
  }
});

// Get All Designations
app.get("/api/ClientStrive/GetAllDestination", async (req, res) => {
  try {
    const response = await axios.get(
      "https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation"
    );

    res.status(200).json({
      status: true,
      message: "Designations fetched successfully",
      data: response.data,
    });
  } catch (err) {
    console.error("Error fetching designations:", err.message);
    res.status(500).json({
      status: false,
      message: "Failed to fetch designations",
      error: err.message,
    });
  }
});

// Get All Clients
app.get("/api/ClientStrive/GetAllClients", async (req, res) => {
  try {
    const response = await axios.get(
      "https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients"
    );

    res.status(200).json({
      status: true,
      message: "Clients fetched successfully",
      data: response.data,
    });
  } catch (err) {
    console.error("Error fetching clients:", err.message);
    res.status(500).json({
      status: false,
      message: "Failed to fetch clients",
      error: err.message,
    });
  }
});

app.get("/api/ClientStrive/GetAllClientProjects", async (req, res) => {
  try {
    const response = await axios.get(
      "https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClientProjects"
    );

    res.status(200).json({
      status: true,
      message: "Clients fetched successfully",
      data: response.data,
    });
  } catch (err) {
    console.error("Error fetching clients:", err.message);
    res.status(500).json({
      status: false,
      message: "Failed to fetch clients",
      error: err.message,
    });
  }
});

app.get("/api/ClientStrive/GetProjectsLeadByEmployeeId", async (req, res) => {
  try {
    const employeeId = req.body;
    const response = await axios.get(
      "https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients",
      employeeId
    );

    const clients = Array.isArray(response.data) ? response.data : [];
    res.status(200).json({
      status: true,
      message: "Clients fetched successfully",
      data: response.data,
    });
  } catch (err) {
    console.error("Error fetching clients:", err.message);
    res.status(500).json({
      status: false,
      message: "Failed to fetch clients",
      error: err.message,
    });
  }
});

// Add or Update Client
app.post("/api/ClientStrive/AddUpdateClient", async (req, res) => {
  try {
    const clientData = req.body;
    const response = await axios.post(
      "https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClient",
      clientData
    );
    res.status(200).json({
      status: true,
      message: "Client added/updated successfully",
      data: response.data,
    });
  } catch (err) {
    console.error("Error adding/updating client:", err.message);
    res.status(500).json({
      status: false,
      message: "Failed to add/update client",
      error: err.message,
    });
  }
});

app.post("/api/ClientStrive/AddUpdateClientProject", async( req, res) => {
  try{
    const projectData = req.body;
    console.log(projectData);
    const response = await axios.post(
      "https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClientProject",
      projectData
    );
    
    res.status(200).json({
      status: true,
      message: "Client Project Updated Successfully",
      data: response.data
    })

  }
  catch(err){
    console.error("Error adding/updating client project:", err.message);
    res.status(500).json({
      status: false,
      message: "Failed to add/update client project",
      error: err.message,
    });
  }
})

app.get("/api/ClientStrive/GetAllEmployee", async (req, res)=>{
  try{
    const response = await axios.get(
      "https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllEmployee"
    );

    res.status(200).json({
      status : true,
      message: "Employees fetched successfully",
      data: response.data
    })

  }catch(err){
    console.error("Error fetching employees:", err.message);
    res.status(500).json({
      status: false,
      message: "Falied to fetch employees"
    })
  }
})

// Delete Client
app.delete("/api/ClientStrive/DeleteClientByClientId", async (req, res) => {
  try {
    const clientId = req.query.clientId;
    if (!clientId) {
      return res.status(400).json({
        status: false,
        message: "clientId is required",
      });
    }

    const response = await axios.delete(
      `https://freeapi.miniprojectideas.com/api/ClientStrive/DeleteClientByClientId?clientId=${clientId}`
    );
    res.status(200).json({
      status: true,
      message: "Client deleted successfully",
      data: response.data,
    });
  } catch (err) {
    console.error("Error deleting client:", err.message);
    res.status(500).json({
      status: false,
      message: "Failed to delete client",
      error: err.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
