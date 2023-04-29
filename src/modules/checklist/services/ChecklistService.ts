import { client, handleApiError } from "@core/services/api";
import axios from "axios";

async function getChecklists() {
  try {
    const response = await client.get('/v1/checklist');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleApiError(error, 'ChecklistService.getChecklists');
    } else {
      throw error;
    }
  }
};

async function getChecklistById(id: string) {
  try {
    const response = await client.get('/v1/checklist', { params: { id: id } });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleApiError(error, 'ChecklistService.getChecklistById');
    } else {
      throw error;
    }
  }
};

export {
  getChecklists,
  getChecklistById
}