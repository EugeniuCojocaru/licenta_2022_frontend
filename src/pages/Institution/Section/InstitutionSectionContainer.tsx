import React, { useEffect, useState } from "react";
import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
  InstitutionHierarchyUpdateDto,
} from "../../../common";
import {
  createInstitutions,
  getInstitutions,
  updateInstitutions,
} from "../../../service/institutionService";
import { SectionContainer } from "../InstitutionPage.styles";
import { Section } from "./Section";

interface Props {
  shouldLoadFaculties: (idInstitution: string) => void;
}
const InstitutionSectionContainer = ({ shouldLoadFaculties }: Props) => {
  const [data, setData] = useState<InstitutionHierarchyType[]>([]);
  const [refreshUI, setRefreshUI] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getInstitutions();
      console.log({ response });
      if (response) {
        setData(response.data);
      }
    };
    fetchData();
  }, [refreshUI]);

  const handleAddInstitution = async (name: InstitutionHierarchyCreateDto) => {
    const response = await createInstitutions(name);
    if (response) setRefreshUI(!refreshUI);
  };

  const handleUpdateInstitution = async (
    newInstitution: InstitutionHierarchyUpdateDto
  ): Promise<boolean> => {
    const response = await updateInstitutions(newInstitution);
    if (response?.status === 200) return true;
    return false;
  };

  const handleGetFacultiesForInstitution = async (idInstitution: string) => {
    shouldLoadFaculties(idInstitution);
  };

  return (
    <SectionContainer>
      <Section
        labelTextField="Institution name"
        title="Institutions"
        data={data}
        handleCreate={handleAddInstitution}
        handleUpdate={handleUpdateInstitution}
        handleShowChildren={handleGetFacultiesForInstitution}
        canShowChildren
        showAddButton
        refreshUI={() => {
          setRefreshUI(!refreshUI);
        }}
      />
    </SectionContainer>
  );
};

export default InstitutionSectionContainer;