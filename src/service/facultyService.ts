import { FacultyCreateDto, InstitutionHierarchyUpdateDto } from "../common";
import getAxiosInstance from "./axiosInstance";

export const getFaculties = async () => {
  try {
    const response = await getAxiosInstance().get(`/api/faculties`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getDepartmentsForFaculties = async (idFaculty: string) => {
  try {
    const response = await getAxiosInstance().get(
      `/api/faculties/${idFaculty}/departments`
    );
    console.log({ response });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createFaculty = async (newFaculty: FacultyCreateDto) => {
  try {
    const response = await getAxiosInstance().post(
      `/api/faculties`,
      newFaculty
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateFaculty = async (
  updatedFaculty: InstitutionHierarchyUpdateDto
) => {
  try {
    const response = await getAxiosInstance().put(
      `/api/faculties`,
      {
        id: updatedFaculty.id,
        name: updatedFaculty.name,
      },
      { params: { institutionId: updatedFaculty.idParent } }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
