// currently here: make table of part2 part3 and part4
// complete part4
window.onload = async () => {
    if (sessionStorage.getItem('patient_code') != null) {
        await fetch(`/request/demographic?patient_code=${sessionStorage.getItem('patient_code')}`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
            .then(res => res.json())
            .then((data) => {
                if (data.length != 0) {
                    const part1_lesion = (data[0].lesion_prostate_a != null || !data[0].lesion_prostate_a) ||
                    (data[0].lesion_lymph_a != null || !data[0].lesion_lymph_a) || (data[0].lesion_bone_a != null || !data[0].lesion_bone_a) ||
                    (data[0].lesion_brain_a != null || !data[0].lesion_brain_a) || (data[0].lesion_lungs_a != null || !data[0].lesion_lungs_a) ||
                    (data[0].lesion_liver_a != null || !data[0].lesion_liver_a) || (data[0].lesion_others_a != null || !data[0].lesion_others_a) ||
                    (data[0].lesion_prostate_b != null || !data[0].lesion_prostate_b) ||
                    (data[0].lesion_lymph_b != null || !data[0].lesion_lymph_b) || (data[0].lesion_bone_b != null || !data[0].lesion_bone_b) ||
                    (data[0].lesion_brain_b != null || !data[0].lesion_brain_b) || (data[0].lesion_lungs_b != null || !data[0].lesion_lungs_b) ||
                    (data[0].lesion_liver_b != null || !data[0].lesion_liver_b) || (data[0].lesion_others_b != null || !data[0].lesion_others_b)
                    sessionStorage.setItem('part1_lesion', part1_lesion)
                    const patient_info_body = document.querySelector('.patient-info-body')
                    patient_info_body.innerHTML = `
                    <div class="card">
                        <h5 class="card-header">Demographics, Physical Exam, and Screening</h5>
                        <div class="card-body">
                            <h5 class="card-text">Demographic Information</h5>
                            <div class="row">
                                <div class="col">
                                    <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>First Name</td>
                                            <td class="part1-info" contenteditable=false>${data[0].first_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Last Name</td>
                                            <td class="part1-info" contenteditable=false>${data[0].last_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Age</td>
                                            <td class="part1-info" contenteditable=false>${data[0].age}</td>
                                        </tr>
                                        <tr>
                                            <td>City of Residence</td>
                                            <td class="part1-info" contenteditable=false>${data[0].city_of_residence}</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Diagnosis</td>
                                            <td class="part1-info" contenteditable=false>${data[0].date_of_diagnosis}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <div class="col">
                                    <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Date of Surgery</td>
                                            <td class="part1-info" contenteditable=false>${data[0].date_of_surgery}</td>
                                        </tr>
                                        <tr>
                                            <td>Histopath Result</td>
                                            <td class="part1-info" contenteditable=false>${data[0].histopath_result}</td>
                                        </tr>
                                        <tr>
                                            <td>Gleason Score</td>
                                            <td class="part1-info" contenteditable=false>${data[0].gleason_score}</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Treatment</td>
                                            <td class="part1-info" contenteditable=false>${data[0].date_of_treatment}</td>
                                        </tr>
                                        <tr>
                                            <td>Treatment Type</td>
                                            <td class="part1-info" contenteditable=false>${(data[0].treatment_type == 'hormonal') ? 'Hormonal Theraphy' : ((data[0].treatment_type == 'radiation') ? 'Radiation Theraphy' : ((data[0].treatment_type == 'chemo') ? 'Chemotheraphy' : ((data[0].treatment_type == 'others') ? 'Others' : data[0].treatment_type)))}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            <h5 class="card-text">Physical Examination</h5>
                            <div class="row">
                                <div class="col">
                                    <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ECOG Score</td>
                                            <td class="part1-info" contenteditable=false>${data[0].ecog_score}</td>
                                        </tr>
                                        <tr>
                                            <td>Height</td>
                                            <td class="part1-info" contenteditable=false>${data[0].ht}</td>
                                        </tr>
                                        <tr>
                                            <td>Weight</td>
                                            <td class="part1-info" contenteditable=false>${data[0].wt}</td>
                                        </tr>
                                        <tr>
                                            <td>BMI</td>
                                            <td class="part1-info" contenteditable=false>${data[0].bmi}</td>
                                        </tr>
                                        <tr>
                                            <td>Blood Pressure</td>
                                            <td class="part1-info" contenteditable=false>${data[0].bp}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <div class="col">
                                    <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Heart Rate</td>
                                            <td class="part1-info" contenteditable=false>${data[0].hr}</td>
                                        </tr>
                                        <tr>
                                            <td>Pain Score</td>
                                            <td class="part1-info" contenteditable=false>${data[0].pain_score}</td>
                                        </tr>
                                        <tr>
                                            <td>Local Symptoms</td>
                                            <td class="part1-info" contenteditable=false>${data[0].local_symptoms}</td>
                                        </tr>
                                        <tr>
                                            <td>Systemic Symptoms</td>
                                            <td class="part1-info" contenteditable=false>${data[0].systemic_symptoms}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            <h5 class="card-text">Laboratory</h5>
                            <div class="row">
                                <div class="col">
                                    <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>PSA</td>
                                            <td class="part1-info" contenteditable=false>${data[0].psa}</td>
                                        </tr>
                                        <tr>
                                            <td>Creatinine</td>
                                            <td class="part1-info" contenteditable=false>${data[0].creatinine}</td>
                                        </tr>
                                        <tr>
                                            <td>WBC</td>
                                            <td class="part1-info" contenteditable=false>${data[0].wbc}</td>
                                        </tr>
                                        <tr>
                                            <td>RBC</td>
                                            <td class="part1-info" contenteditable=false>${data[0].rbc}</td>
                                        </tr>
                                        <tr>
                                            <td>Hemoglobin</td>
                                            <td class="part1-info" contenteditable=false>${data[0].hemoglobin}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <div class="col">
                                    <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Hematocrit</td>
                                            <td class="part1-info" contenteditable=false>${data[0].hematocrit}</td>
                                        </tr>
                                        <tr>
                                            <td>Platelet Count</td>
                                            <td class="part1-info" contenteditable=false>${data[0].platelet_count}</td>
                                        </tr>
                                        <tr>
                                            <td>Lactate dehydrodenase</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lactate_dehydrogenase}</td>
                                        </tr>
                                        <tr>
                                            <td>Alkaline phosphatase</td>
                                            <td class="part1-info" contenteditable=false>${data[0].alkaline_phosphatase}</td>
                                        </tr>
                                        <tr>
                                            <td>SGPT, SGOT, Bilirubins</td>
                                            <td class="part1-info" contenteditable=false>${data[0].sgpt_sgot_bilirubins}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            <h5 class="card-text">Imaging, Assessment, and Plan</h5>
                            <div class="row">
                                <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Normal Salivary Gland</td>
                                            <td class="part1-info" contenteditable=false>${data[0].normal_salivary_gland}</td>
                                        </tr>
                                        <tr>
                                            <td>Right Salivary Gland Obstruction</td>
                                            <td class="part1-info" contenteditable=false>${data[0].right_obstruction}</td>
                                        </tr>
                                        <tr>
                                            <td>Left Salivary Gland Obstruction</td>
                                            <td class="part1-info" contenteditable=false>${data[0].left_obstruction}</td>
                                        </tr>
                                        <tr>
                                            <td>Renal Scintigraphy</td>
                                            <td class="part1-info" contenteditable=false>${(data[0].renal_scintigraphy == 'mag3') ? 'MAG3' : ((data[0].renal_scintigraphy == 'dtpa') ? 'DTPA' : data[0].renal_scintigraphy)}</td>
                                        </tr>
                                        <tr>
                                            <td>With Bone Metastasis</td>
                                            <td class="part1-info" contenteditable=false>${data[0].bone_scan}</td>
                                        </tr>
                                        <tr>
                                            <td>Location of Bone Metastasis</td>
                                            <td class="part1-info" contenteditable=false>${data[0].metastasis_location}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Ga-68/F-18 PSMA</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_ga_psma}</td>
                                        </tr>
                                        <tr>
                                            <td>Prostate Lesion Present</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_prostate_a}</td>
                                        </tr>
                                        <tr>
                                            <td>Prostate Lesion Location</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_prostate_a_location}</td>
                                        </tr>
                                        <tr>
                                            <td>Prostate Lesion SUV</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_prostate_a_suv}</td>
                                        </tr>
                                        <tr>
                                            <td>Prostate Lesion Measurement</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_prostate_a_measurement}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                            <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Lymph Node Lesion Present</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lymph_a}</td>
                                        </tr>
                                        <tr>
                                            <td>Lymph Node Lesion Location</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lymph_a_location}</td>
                                        </tr>
                                        <tr>
                                            <td>Lymph Node Lesion SUV</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lymph_a_suv}</td>
                                        </tr>
                                        <tr>
                                            <td>Lymph Node Lesion Measurement</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lymph_a_measurement}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Bone Lesion Present</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_bone_a}</td>
                                        </tr>
                                        <tr>
                                            <td>Bone Lesion Location</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_bone_a_location}</td>
                                        </tr>
                                        <tr>
                                            <td>Bone Lesion SUV</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_bone_a_suv}</td>
                                        </tr>
                                        <tr>
                                            <td>Bone Lesion Measurement</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_bone_a_measurement}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                            <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Brain Lesion Present</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_brain_a}</td>
                                        </tr>
                                        <tr>
                                            <td>Brain Lesion Location</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_brain_a_location}</td>
                                        </tr>
                                        <tr>
                                            <td>Brain Lesion SUV</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_brain_a_suv}</td>
                                        </tr>
                                        <tr>
                                            <td>Brain Lesion Measurement</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_brain_a_measurement}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Lungs Lesion Present</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lungs_a}</td>
                                        </tr>
                                        <tr>
                                            <td>Lungs Lesion Location</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lungs_a_location}</td>
                                        </tr>
                                        <tr>
                                            <td>Lungs Lesion SUV</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lungs_a_suv}</td>
                                        </tr>
                                        <tr>
                                            <td>Lungs Lesion Measurement</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lungs_a_measurement}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                            <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Liver Lesion Present</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_liver_a}</td>
                                        </tr>
                                        <tr>
                                            <td>Liver Lesion Location</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_liver_a_location}</td>
                                        </tr>
                                        <tr>
                                            <td>Liver Lesion SUV</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_liver_a_suv}</td>
                                        </tr>
                                        <tr>
                                            <td>Liver Lesion Measurement</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_liver_a_measurement}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Other Lesion Present</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_others_a}</td>
                                        </tr>
                                        <tr>
                                            <td>Other Lesion Location</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_others_a_location}</td>
                                        </tr>
                                        <tr>
                                            <td>Other Lesion SUV</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_others_a_suv}</td>
                                        </tr>
                                        <tr>
                                            <td>Other Lesion Measurement</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_others_a_measurement}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                            <div class="col">
                            <table class="table text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Attribute</th>
                                        <th scope="col">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>FDG PET/CT</td>
                                        <td class="part1-info" contenteditable=false>${data[0].lesion_ga_psma}</td>
                                    </tr>
                                    <tr>
                                        <td>Prostate Lesion Present</td>
                                        <td class="part1-info" contenteditable=false>${data[0].lesion_prostate_a}</td>
                                    </tr>
                                    <tr>
                                        <td>Prostate Lesion Location</td>
                                        <td class="part1-info" contenteditable=false>${data[0].lesion_prostate_a_location}</td>
                                    </tr>
                                    <tr>
                                        <td>Prostate Lesion SUV</td>
                                        <td class="part1-info" contenteditable=false>${data[0].lesion_prostate_a_suv}</td>
                                    </tr>
                                    <tr>
                                        <td>Prostate Lesion Measurement</td>
                                        <td class="part1-info" contenteditable=false>${data[0].lesion_prostate_a_measurement}</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Lymph Node Lesion Present</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lymph_a}</td>
                                        </tr>
                                        <tr>
                                            <td>Lymph Node Lesion Location</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lymph_a_location}</td>
                                        </tr>
                                        <tr>
                                            <td>Lymph Node Lesion SUV</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lymph_a_suv}</td>
                                        </tr>
                                        <tr>
                                            <td>Lymph Node Lesion Measurement</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lymph_a_measurement}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                            <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Bone Lesion Present</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_bone_a}</td>
                                        </tr>
                                        <tr>
                                            <td>Bone Lesion Location</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_bone_a_location}</td>
                                        </tr>
                                        <tr>
                                            <td>Bone Lesion SUV</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_bone_a_suv}</td>
                                        </tr>
                                        <tr>
                                            <td>Bone Lesion Measurement</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_bone_a_measurement}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Brain Lesion Present</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_brain_a}</td>
                                        </tr>
                                        <tr>
                                            <td>Brain Lesion Location</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_brain_a_location}</td>
                                        </tr>
                                        <tr>
                                            <td>Brain Lesion SUV</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_brain_a_suv}</td>
                                        </tr>
                                        <tr>
                                            <td>Brain Lesion Measurement</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_brain_a_measurement}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                            <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Lungs Lesion Present</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lungs_a}</td>
                                        </tr>
                                        <tr>
                                            <td>Lungs Lesion Location</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lungs_a_location}</td>
                                        </tr>
                                        <tr>
                                            <td>Lungs Lesion SUV</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lungs_a_suv}</td>
                                        </tr>
                                        <tr>
                                            <td>Lungs Lesion Measurement</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_lungs_a_measurement}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Liver Lesion Present</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_liver_a}</td>
                                        </tr>
                                        <tr>
                                            <td>Liver Lesion Location</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_liver_a_location}</td>
                                        </tr>
                                        <tr>
                                            <td>Liver Lesion SUV</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_liver_a_suv}</td>
                                        </tr>
                                        <tr>
                                            <td>Liver Lesion Measurement</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_liver_a_measurement}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                            <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Other Lesion Present</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_others_a}</td>
                                        </tr>
                                        <tr>
                                            <td>Other Lesion Location</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_others_a_location}</td>
                                        </tr>
                                        <tr>
                                            <td>Other Lesion SUV</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_others_a_suv}</td>
                                        </tr>
                                        <tr>
                                            <td>Other Lesion Measurement</td>
                                            <td class="part1-info" contenteditable=false>${data[0].lesion_others_a_measurement}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <div class="col">
                                <table class="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Assessment</td>
                                            <td class="part1-info" contenteditable=false>${(data[0].assessment == 'low') ? 'Low Risk' : ((data[0].assessment == 'intermediate') ? 'Intermediate Risk' : ((data[0].assessment == 'high') ? 'High Risk' : data[0].assessment))}</td>
                                        </tr>
                                        <tr>
                                            <td>Plan</td>
                                            <td class="part1-info" contenteditable=false>${data[0].plan}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <div class="card text-center" style="margin: 10px">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col edit-btn-cont" style="display:block">
                                        <a class="btn btn-outline-secondary mb-3 edit-p1" id="edit-part1" >Edit Demographics, Physical Exam, and Screening</a>
                                    </div>
                                    <div class="col cancel-btn-cont" style="display:none">
                                        <a class="btn btn-outline-secondary mb-3 cancel-edit-p1" id="cancel-edit-part1">Cancel Edit</a>
                                    </div>
                                    <div class="col save-btn-cont" style="display:none">
                                        <a class="btn btn-outline-secondary mb-3 save-edit-p1" id="save-edit-part1">Save</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
                    const edit_btn_cont = document.querySelector('.edit-btn-cont');
                    const edit_part1 = document.querySelector('#edit-part1');
                    const part1_info = document.querySelectorAll('.part1-info')
                    edit_part1.addEventListener('click', () => {
                        const cancel_btn_cont = document.querySelector('.cancel-btn-cont');
                        const save_btn_cont = document.querySelector('.save-btn-cont');
                        const cancel_edit_part1 = document.querySelector('#cancel-edit-part1');
                        const save_edit_part1 = document.querySelector('#save-edit-part1');
                        edit_btn_cont.style.display = 'none';
                        cancel_btn_cont.style.display = 'block';
                        save_btn_cont.style.display = 'block';
                        for (i = 0; i < part1_info.length; i++) {
                            part1_info[i].contentEditable = true;
                        }
                        cancel_edit_part1.addEventListener('click', () => {
                            location.reload();
                        })
                        save_edit_part1.addEventListener('click', () => {
                            fetch('/request/update/part1', {
                                method: 'PUT',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    patient_code: sessionStorage.getItem('patient_code'),
                                    first_name: (part1_info[0].innerText == 'null' || part1_info[0].innerText == '')? null : part1_info[0].innerText,
                                    last_name: (part1_info[1].innerText == 'null' || part1_info[1].innerText == '')? null : part1_info[1].innerText,
                                    age: (part1_info[2].innerText == 'null' || part1_info[2].innerText == '')? null : parseInt(part1_info[2].innerText),
                                    city_of_residence: (part1_info[3].innerText == 'null' || part1_info[3].innerText == '')? null : part1_info[3].innerText,
                                    date_of_diagnosis: (part1_info[4].innerText == 'null' || part1_info[4].innerText == '')? null : part1_info[4].innerText,
                                    date_of_surgery: (part1_info[5].innerText == 'null' || part1_info[5].innerText == '')? null : part1_info[5].innerText,
                                    histopath_result: (part1_info[6].innerText == 'null' || part1_info[6].innerText == '')? null : part1_info[6].innerText,
                                    gleason_score: (part1_info[7].innerText == 'null' || part1_info[7].innerText == '')? null : parseInt(part1_info[7].innerText),
                                    date_of_treatment: (part1_info[8].innerText == 'null' || part1_info[8].innerText == '')? null : part1_info[8].innerText,
                                    treatment_type: (part1_info[9].innerText == 'null' || part1_info[9].innerText == '')? null : part1_info[9].innerText,
                                    ecog_score: (part1_info[10].innerText == 'null' || part1_info[10].innerText == '')? null : parseFloat(part1_info[10].innerText),
                                    ht: (part1_info[11].innerText == 'null' || part1_info[11].innerText == '')? null : parseFloat(part1_info[11].innerText),
                                    wt: (part1_info[12].innerText == 'null' || part1_info[12].innerText == '')? null : parseFloat(part1_info[12].innerText),
                                    bmi: (part1_info[13].innerText == 'null' || part1_info[13].innerText == '')? null : parseFloat(part1_info[13].innerText),
                                    bp: (part1_info[14].innerText == 'null' || part1_info[14].innerText == '')? null : part1_info[14].innerText,
                                    hr: (part1_info[15].innerText == 'null' || part1_info[15].innerText == '')? null : parseFloat(part1_info[15].innerText),
                                    pain_score: (part1_info[16].innerText == 'null' || part1_info[16].innerText == '')? null : parseFloat(part1_info[16].innerText),
                                    local_symptoms: (part1_info[17].innerText == 'null' || part1_info[17].innerText == '')? null : part1_info[17].innerText,
                                    systemic_symptoms: (part1_info[18].innerText == 'null' || part1_info[18].innerText == '')? null : part1_info[18].innerText,
                                    psa: (part1_info[19].innerText == 'null' || part1_info[19].innerText == '')? null : parseFloat(part1_info[19].innerText),
                                    creatinine: (part1_info[20].innerText == 'null' || part1_info[20].innerText == '')? null : parseFloat(part1_info[20].innerText),
                                    wbc: (part1_info[21].innerText == 'null' || part1_info[21].innerText == '')? null : parseFloat(part1_info[21].innerText),
                                    rbc: (part1_info[22].innerText == 'null' || part1_info[22].innerText == '')? null : parseFloat(part1_info[22].innerText),
                                    hemoglobin: (part1_info[23].innerText == 'null' || part1_info[23].innerText == '')? null : parseFloat(part1_info[23].innerText),
                                    hematocrit: (part1_info[24].innerText == 'null' || part1_info[24].innerText == '')? null : parseFloat(part1_info[24].innerText),
                                    platelet_count: (part1_info[25].innerText == 'null' || part1_info[25].innerText == '')? null : parseFloat(part1_info[25].innerText),
                                    lactate_dehydrogenase: (part1_info[26].innerText == 'null' || part1_info[26].innerText == '')? null : parseFloat(part1_info[26].innerText),
                                    alkaline_phosphatase: (part1_info[27].innerText == 'null' || part1_info[27].innerText == '')? null : parseFloat(part1_info[27].innerText),
                                    sgpt_sgot_bilirubins: (part1_info[28].innerText == 'null' || part1_info[28].innerText == '')? null : parseFloat(part1_info[28].innerText),
                                    normal_salivary_gland: (part1_info[29].innerText == 'null' || part1_info[29].innerText == '')? null : ((part1_info[29].innerText == 'true')? true:false),
                                    right_obstruction: (part1_info[30].innerText == 'null' || part1_info[30].innerText == '')? null : ((part1_info[30].innerText == 'true')? true:false),
                                    left_obstruction:  (part1_info[31].innerText == 'null' || part1_info[31].innerText == '')? null : ((part1_info[31].innerText == 'true')? true:false),
                                    renal_scintigraphy: (part1_info[32].innerText == 'null' || part1_info[32].innerText == '')? null : part1_info[32].innerText,
                                    bone_scan: (part1_info[33].innerText == 'null' || part1_info[33].innerText == '')? null : ((part1_info[33].innerText == 'true')? true:false),
                                    metastasis_location: (part1_info[34].innerText == 'null' || part1_info[34].innerText == '')? null : part1_info[34].innerText,
                                    lesion_ga_psma: (part1_info[35].innerText == 'null' || part1_info[35].innerText == '')? null : part1_info[35].innerText,
                                    lesion_prostate_a: (part1_info[36].innerText == 'null' || part1_info[36].innerText == '')? null : ((part1_info[36].innerText == 'true')? true:false),
                                    lesion_prostate_a_location: (part1_info[37].innerText == 'null' || part1_info[37].innerText == '')? null : part1_info[37].innerText,
                                    lesion_prostate_a_suv: (part1_info[38].innerText == 'null' || part1_info[38].innerText == '')? null : parseFloat(part1_info[38].innerText),
                                    lesion_prostate_a_measurement: (part1_info[39].innerText == 'null' || part1_info[39].innerText == '')? null : parseFloat(part1_info[39].innerText),
                                    lesion_lymph_a: (part1_info[40].innerText == 'null' || part1_info[40].innerText == '')? null : ((part1_info[40].innerText == 'true')? true:false),
                                    lesion_lymph_a_location: (part1_info[41].innerText == 'null' || part1_info[41].innerText == '')? null : part1_info[41].innerText,
                                    lesion_lymph_a_suv: (part1_info[42].innerText == 'null' || part1_info[42].innerText == '')? null : parseFloat(part1_info[42].innerText),
                                    lesion_lymph_a_measurement: (part1_info[43].innerText == 'null' || part1_info[43].innerText == '')? null : parseFloat(part1_info[43].innerText),
                                    lesion_bone_a: (part1_info[44].innerText == 'null' || part1_info[44].innerText == '')? null : ((part1_info[44].innerText == 'true')? true:false),
                                    lesion_bone_a_location: (part1_info[45].innerText == 'null' || part1_info[45].innerText == '')? null : part1_info[45].innerText,
                                    lesion_bone_a_suv: (part1_info[46].innerText == 'null' || part1_info[46].innerText == '')? null : parseFloat(part1_info[46].innerText),
                                    lesion_bone_a_measurement: (part1_info[47].innerText == 'null' || part1_info[47].innerText == '')? null : parseFloat(part1_info[47].innerText),
                                    lesion_brain_a: (part1_info[48].innerText == 'null' || part1_info[48].innerText == '')? null : ((part1_info[48].innerText == 'true')? true:false),
                                    lesion_brain_a_location: (part1_info[49].innerText == 'null' || part1_info[49].innerText == '')? null : part1_info[49].innerText,
                                    lesion_brain_a_suv: (part1_info[50].innerText == 'null' || part1_info[50].innerText == '')? null : parseFloat(part1_info[50].innerText),
                                    lesion_brain_a_measurement: (part1_info[51].innerText == 'null' || part1_info[51].innerText == '')? null : parseFloat(part1_info[51].innerText),
                                    lesion_lungs_a: (part1_info[52].innerText == 'null' || part1_info[52].innerText == '')? null : ((part1_info[52].innerText == 'true')? true:false),
                                    lesion_lungs_a_location: (part1_info[53].innerText == 'null' || part1_info[53].innerText == '')? null : part1_info[53].innerText,
                                    lesion_lungs_a_suv: (part1_info[54].innerText == 'null' || part1_info[54].innerText == '')? null : parseFloat(part1_info[54].innerText),
                                    lesion_lungs_a_measurement: (part1_info[55].innerText == 'null' || part1_info[55].innerText == '')? null : parseFloat(part1_info[55].innerText),
                                    lesion_liver_a: (part1_info[56].innerText == 'null' || part1_info[56].innerText == '')? null : ((part1_info[56].innerText == 'true')? true:false),
                                    lesion_liver_a_location: (part1_info[57].innerText == 'null' || part1_info[57].innerText == '')? null : part1_info[57].innerText,
                                    lesion_liver_a_suv: (part1_info[58].innerText == 'null' || part1_info[58].innerText == '')? null : parseFloat(part1_info[58].innerText),
                                    lesion_liver_a_measurement: (part1_info[59].innerText == 'null' || part1_info[59].innerText == '')? null : parseFloat(part1_info[59].innerText),
                                    lesion_others_a: (part1_info[60].innerText == 'null' || part1_info[60].innerText == '')? null : ((part1_info[60].innerText == 'true')? true:false),
                                    lesion_others_a_location: (part1_info[61].innerText == 'null' || part1_info[61].innerText == '')? null : part1_info[61].innerText,
                                    lesion_others_a_suv: (part1_info[62].innerText == 'null' || part1_info[62].innerText == '')? null : parseFloat(part1_info[62].innerText),
                                    lesion_others_a_measurement: (part1_info[63].innerText == 'null' || part1_info[63].innerText == '')? null : parseFloat(part1_info[63].innerText),
                                    lesion_fdg_ctr: (part1_info[64].innerText == 'null' || part1_info[64].innerText == '')? null : ((part1_info[64].innerText == 'true')? true:false),
                                    lesion_prostate_b: (part1_info[65].innerText == 'null' || part1_info[65].innerText == '')? null : ((part1_info[65].innerText == 'true')? true:false),
                                    lesion_prostate_b_location: (part1_info[66].innerText == 'null' || part1_info[66].innerText == '')? null : part1_info[66].innerText,
                                    lesion_prostate_b_suv: (part1_info[67].innerText == 'null' || part1_info[67].innerText == '')? null : parseFloat(part1_info[67].innerText),
                                    lesion_prostate_b_measurement: (part1_info[68].innerText == 'null' || part1_info[68].innerText == '')? null : parseFloat(part1_info[68].innerText),
                                    lesion_lymph_b: (part1_info[69].innerText == 'null' || part1_info[69].innerText == '')? null : ((part1_info[69].innerText == 'true')? true:false),
                                    lesion_lymph_b_location: (part1_info[70].innerText == 'null' || part1_info[70].innerText == '')? null : part1_info[70].innerText,
                                    lesion_lymph_b_suv: (part1_info[71].innerText == 'null' || part1_info[71].innerText == '')? null : parseFloat(part1_info[71].innerText),
                                    lesion_lymph_b_measurement: (part1_info[72].innerText == 'null' || part1_info[72].innerText == '')? null : parseFloat(part1_info[72].innerText),
                                    lesion_bone_b: (part1_info[73].innerText == 'null' || part1_info[73].innerText == '')? null : ((part1_info[73].innerText == 'true')? true:false),
                                    lesion_bone_b_location: (part1_info[74].innerText == 'null' || part1_info[74].innerText == '')? null : part1_info[74].innerText,
                                    lesion_bone_b_suv: (part1_info[75].innerText == 'null' || part1_info[75].innerText == '')? null : parseFloat(part1_info[75].innerText),
                                    lesion_bone_b_measurement: (part1_info[76].innerText == 'null' || part1_info[76].innerText == '')? null : parseFloat(part1_info[76].innerText),
                                    lesion_brain_b: (part1_info[77].innerText == 'null' || part1_info[77].innerText == '')? null : ((part1_info[77].innerText == 'true')? true:false),
                                    lesion_brain_b_location: (part1_info[78].innerText == 'null' || part1_info[78].innerText == '')? null : part1_info[78].innerText,
                                    lesion_brain_b_suv: (part1_info[79].innerText == 'null' || part1_info[79].innerText == '')? null : parseFloat(part1_info[79].innerText),
                                    lesion_brain_b_measurement: (part1_info[80].innerText == 'null' || part1_info[80].innerText == '')? null : parseFloat(part1_info[80].innerText),
                                    lesion_lungs_b: (part1_info[81].innerText == 'null' || part1_info[81].innerText == '')? null : ((part1_info[81].innerText == 'true')? true:false),
                                    lesion_lungs_b_location: (part1_info[82].innerText == 'null' || part1_info[82].innerText == '')? null : part1_info[82].innerText,
                                    lesion_lungs_b_suv: (part1_info[83].innerText == 'null' || part1_info[83].innerText == '')? null : parseFloat(part1_info[83].innerText),
                                    lesion_lungs_b_measurement: (part1_info[84].innerText == 'null' || part1_info[84].innerText == '')? null : parseFloat(part1_info[84].innerText),
                                    lesion_liver_b: (part1_info[85].innerText == 'null' || part1_info[85].innerText == '')? null : ((part1_info[85].innerText == 'true')? true:false),
                                    lesion_liver_b_location: (part1_info[86].innerText == 'null' || part1_info[86].innerText == '')? null : part1_info[86].innerText,
                                    lesion_liver_b_suv: (part1_info[87].innerText == 'null' || part1_info[87].innerText == '')? null : parseFloat(part1_info[87].innerText),
                                    lesion_liver_b_measurement: (part1_info[88].innerText == 'null' || part1_info[88].innerText == '')? null : parseFloat(part1_info[88].innerText),
                                    lesion_others_b: (part1_info[89].innerText == 'null' || part1_info[89].innerText == '')? null : ((part1_info[89].innerText == 'true')? true:false),
                                    lesion_others_b_location: (part1_info[90].innerText == 'null' || part1_info[90].innerText == '')? null : part1_info[90].innerText,
                                    lesion_others_b_suv: (part1_info[91].innerText == 'null' || part1_info[91].innerText == '')? null : parseFloat(part1_info[91].innerText),
                                    lesion_others_b_measurement: (part1_info[92].innerText == 'null' || part1_info[92].innerText == '')? null : parseFloat(part1_info[92].innerText),
                                    assessment: (part1_info[93].innerText == 'null' || part1_info[93].innerText == '')? null : ((part1_info[93].innerText == 'Low Risk')? 'low' : ((part1_info[93].innerText == 'High Risk')? 'high': ((part1_info[93].innerText == 'Intermediate Risk')? 'intermediate': part1_info[93].innerText))),
                                    plan: (part1_info[94].innerText == 'null' || part1_info[94].innerText == '')? null : part1_info[94].innerText
                                })
                            })
                            .then((res) =>res.json())
                            .then((data) => {
                                if(data[0].event = 'success') {
                                    alert(`Patient ${sessionStorage.getItem('first_name')} ${sessionStorage.getItem('last_name')} updated successfully`)
                                    location.reload();
                                }
                                else alert(`Error occured while updating patient ${sessionStorage.getItem('first_name')} ${sessionStorage.getItem('last_name')}`)
                            })
                        })
                    })
                }
            })
            //display other parts
            //iterate through
            .then(async () => {
                await fetch(`/request/therapy?patient_code=${sessionStorage.getItem('patient_code')}`, {
                    method: 'GET',
                    headers: new Headers({ 'Content-Type': 'application/json' })
                })
                .then(res => res.json())
                .then(data => {
                    sessionStorage.setItem('number_of_therapy', data.length)
                    sessionStorage.setItem('therapy_id', data[data.length - 1].therapy_id)
                    //display data per index
                })
            })
            //check if there are lesions
            .then(async () => {
                await fetch(`/request/post-therapy?patient_code=${sessionStorage.getItem('patient_code')}`, {
                    method: 'GET',
                    headers: new Headers({ 'Content-Type': 'application/json' })
                })
                .then(res => res.json())
                .then(data => {
                    sessionStorage.setItem('number_of_post_therapy', data.length)
                    const part3_lesion = data[data.length - 1].lesion_prostate || data[data.length - 1].lesion_lymph ||
                    data[data.length - 1].lesion_bones || data[data.length - 1].lesion_lungs || 
                    data[data.length - 1].lesion_liver
                    sessionStorage.setItem('part3_lesion', part3_lesion)
                    //display data per index
                })
            })
            .then(async () => {
                await fetch(`/request/followup?patient_code=${sessionStorage.getItem('patient_code')}`, {
                    method: 'GET',
                    headers: new Headers({ 'Content-Type': 'application/json' })
                })
                .then(res => res.json())
                .then(data => {
                    
                })
            })
            .then(() => {
                const next_text = document.querySelector('.next-text')
                const next_btn = document.querySelector('#next-btn')
                const n_of_t = sessionStorage.getItem('number_of_therapy')
                const n_of_pt = sessionStorage.getItem('number_of_post_therapy')
                const part1_lesion = sessionStorage.getItem('part1_lesion')
                const part3_lesion = sessionStorage.getItem('part3_lesion')
                if (n_of_t > n_of_pt) {
                    next_text.innerHTML += ' Fill Post-Therapy Form'
                    next_btn.addEventListener('click', () =>{
                        location.href = '/post-therapy'
                    })
                    
                }
                else if (part1_lesion || part3_lesion) {
                    //or part3 or part4
                    
                    if (part3_lesion == true) {
                        next_text.innerHTML += ' Fill Therapy Form'
                        next_btn.addEventListener('click', () =>{
                        location.href = '/therapy'
                        })
                    }
                    else {
                        next_text.innerHTML += ' Fill Follow-up Form'
                        next_btn.addEventListener('click', () =>{
                        location.href = '/follow-up'
                        })
                    }
                }
                else {
                    next_text.innerHTML += ' Fill Follow-up Form'
                    next_btn.addEventListener('click', () =>{
                    location.href = '/follow-up'
                })
                    
                }
            })
    }
    else {
        location.href = '/search'
    }
}