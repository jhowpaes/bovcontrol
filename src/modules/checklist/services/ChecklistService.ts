import { client, handleApiError } from "@core/services/api";
import axios from "axios";
import { IChecklist } from "../interfaces/IChecklist";

async function getChecklists() {
  try {
    const response = await client.get('/v1/checkList');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleApiError(error, 'ChecklistService.getChecklists');
    } else {
      throw error;
    }
  }
};

async function getChecklistById(checklistId: number) {
  try {
    const response = await client.get('/v1/checkList', { params: { id: checklistId } });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleApiError(error, 'ChecklistService.getChecklistById');
    } else {
      throw error;
    }
  }
};

async function createChecklist(checklist: IChecklist) {
  try {
    const response = await client.post('/v1/checkList', {checklists: [checklist]});
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleApiError(error, 'ChecklistService.createChecklist');
    } else {
      throw error;
    }
  }
};

async function updateChecklist(checklistId: number, checklist: IChecklist) {
  try {
    const response = await client.put(`/v1/checkList/${checklistId}`, checklist);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleApiError(error, 'ChecklistService.createChecklist');
    } else {
      throw error;
    }
  }
};

async function deleteChecklist(checklistId: number) {
  try {
    const response = await client.post(`/v1/checkList/${checklistId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleApiError(error, 'ChecklistService.createChecklist');
    } else {
      throw error;
    }
  }
};

export {
  getChecklists,
  getChecklistById,
  createChecklist,
  updateChecklist,
  deleteChecklist
}