"use client";
import PageContainer from "../PageContainer";
import InfrastructureTechnologies from "./InfrastructureTechnologies";
import AcademicEducation from "./AcademicEducation";
import CoursesCertifications from "./CoursesCertifications";
import "./infrastructure.css";

export default function InfrastructurePage() {
    return (
        <PageContainer title="Infraestrutura de TI">
            <InfrastructureTechnologies />
            <AcademicEducation />
            <CoursesCertifications />
        </PageContainer>
    );
}
