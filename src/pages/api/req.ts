import axios from "axios";
const url = axios.create({
  baseURL: ''
});
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjQyNzIyMDg2MDAwMTA2Iiwicm9sZSI6InVzZXJzIiwiU2NvcGUiOiJCci5JbmJ1cnNhLlNhbGVzUG9ydGFsLldlYkFwaSIsIm5iZiI6MTcwOTU3NzM4OCwiZXhwIjoxNzA5NTg4MTg4LCJpYXQiOjE3MDk1NzczODh9.pu4EWoK8VP2oC6vD23A3q5LqIgyPIk1A8nnAA3z9Us8"

const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
}


export const echo = url.get("https://web-dev.inbursa.com.br/PortalVendas.WebAPI/api/service/v1/ContratoNovo/echo").then(response => (response.data))

