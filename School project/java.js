const diseases = {
    "common cold": {
        medications: "Paracetamol, Cetirizine, Phenylephrine",
        dosage: "Paracetamol (500 mg every 6-8 hours), Cetirizine (10 mg once daily), Phenylephrine (10 mg every 4-6 hours)",
        symptoms: "Runny nose, sore throat, mild fever, sneezing"
    },
    "influenza": {
        medications: "Oseltamivir (Tamiflu), Paracetamol, Ibuprofen",
        dosage: "Oseltamivir (75 mg twice daily for 5 days), Paracetamol (500 mg every 6-8 hours), Ibuprofen (400 mg every 6-8 hours)",
        symptoms: "High fever, chills, muscle aches, cough, fatigue"
    },
    "hypertension": {
        medications: "Amlodipine, Losartan, Hydrochlorothiazide, Atenolol",
        dosage: "Amlodipine (5-10 mg once daily), Losartan (50-100 mg once daily), Hydrochlorothiazide (12.5-25 mg once daily), Atenolol (50 mg once daily)",
        symptoms: "Headache, dizziness, blurred vision, chest pain"
    },
    "type 2 diabetes": {
        medications: "Metformin, Glimepiride, Insulin, Sitagliptin",
        dosage: "Metformin (500-1000 mg twice daily), Glimepiride (1-4 mg once daily before breakfast), Insulin (dosage varies per patient), Sitagliptin (100 mg once daily)",
        symptoms: "Frequent urination, excessive thirst, fatigue, blurred vision"
    },
    "asthma": {
        medications: "Salbutamol (Albuterol), Budesonide, Montelukast",
        dosage: "Salbutamol (2 puffs as needed, max 4 times/day), Budesonide (200-400 mcg twice daily), Montelukast (10 mg once daily at night)",
        symptoms: "Wheezing, shortness of breath, chest tightness, coughing"
    },
    "pneumonia": {
        medications: "Amoxicillin-Clavulanate, Azithromycin, Ceftriaxone",
        dosage: "Amoxicillin (500 mg three times daily for 7 days), Azithromycin (500 mg once daily for 3 days), Ceftriaxone (1-2 g IV once daily)",
        symptoms: "Cough with phlegm, fever, chest pain, difficulty breathing"
    },
    "tuberculosis": {
        medications: "Rifampicin, Isoniazid, Ethambutol, Pyrazinamide",
        dosage: "Rifampicin (600 mg once daily), Isoniazid (300 mg once daily), Ethambutol (15 mg/kg once daily), Pyrazinamide (25 mg/kg once daily)",
        symptoms: "Chronic cough, night sweats, weight loss, fever"
    },
    "migraine": {
        medications: "Sumatriptan, Naproxen, Propranolol",
        dosage: "Sumatriptan (50-100 mg at onset), Naproxen (500 mg twice daily), Propranolol (40 mg twice daily)",
        symptoms: "Severe headache, nausea, light sensitivity, visual disturbances"
    },
    "arthritis": {
        medications: "Diclofenac, Methotrexate, Celecoxib",
        dosage: "Diclofenac (50 mg twice daily), Methotrexate (7.5-25 mg once weekly), Celecoxib (200 mg once daily)",
        symptoms: "Joint pain, stiffness, swelling, reduced mobility"
    },
    "hyperthyroidism": {
        medications: "Methimazole, Propylthiouracil, Beta-blockers (Propranolol)",
        dosage: "Methimazole (5-15 mg daily), Propylthiouracil (50-100 mg three times daily), Propranolol (40 mg twice daily)",
        symptoms: "Weight loss, rapid heartbeat, sweating, anxiety"
    },
    "hypothyroidism": {
        medications: "Levothyroxine",
        dosage: "25-150 mcg daily",
        symptoms: "Fatigue, weight gain, cold intolerance, dry skin"
    },
    "gerd": {
        medications: "Omeprazole",
        dosage: "20 mg daily",
        symptoms: "Heartburn, regurgitation, difficulty swallowing"
    },
    "anemia": {
        medications: "Ferrous Sulfate, Vitamin B12",
        dosage: "Ferrous Sulfate (325 mg daily), Vitamin B12 (dosage varies)",
        symptoms: "Fatigue, weakness, pale skin"
    },
    "uti": {
        medications: "Nitrofurantoin",
        dosage: "100 mg twice daily for 5 days",
        symptoms: "Frequent urination, burning sensation, cloudy urine"
    },
    "depression": {
        medications: "Sertraline, Fluoxetine",
        dosage: "Sertraline (50 mg daily), Fluoxetine (20 mg daily)",
        symptoms: "Persistent sadness, loss of interest, fatigue"
    },
    "anxiety disorder": {
        medications: "Alprazolam, Clonazepam",
        dosage: "Alprazolam (0.5 mg twice daily), Clonazepam (dosage varies)",
        symptoms: "Excessive worry, restlessness, fatigue"
    },
    "chickenpox": {
        medications: "Acyclovir",
        dosage: "800 mg 5 times daily",
        symptoms: "Itchy rash, fever, fatigue"
    },
    "hepatitis b": {
        medications: "Tenofovir",
        dosage: "300 mg daily",
        symptoms: "Fatigue, jaundice, abdominal pain"
    },
    "hepatitis c": {
        medications: "Sofosbuvir + Ledipasvir",
        dosage: "400/90 mg daily",
        symptoms: "Fatigue, jaundice, dark urine"
    },
    "dengue fever": {
        medications: "Supportive therapy, Paracetamol",
        dosage: "Paracetamol (500 mg every 6-8 hours as needed)",
        symptoms: "High fever, severe headache, joint pain"
    },
    "malaria": {
        medications: "Artemether-Lumefantrine, Chloroquine",
        dosage: "Dosage varies based on treatment regimen",
        symptoms: "Fever, chills, sweating, headache"
    },
    "typhoid fever": {
        medications: "Azithromycin",
        dosage: "500 mg daily for 7 days",
        symptoms: "Fever, weakness, stomach pain"
    },
    "covid-19": {
        medications: "Remdesivir",
        dosage: "200 mg IV on day 1, then 100 mg daily",
        symptoms: "Fever, cough, difficulty breathing"
    },
    "sinusitis": {
        medications: "Amoxicillin-Clavulanate",
        dosage: "500 mg three times daily",
        symptoms: "Facial pain, nasal congestion, headache"
    },
    "ear infection": {
        medications: "Amoxicillin",
        dosage: "500 mg three times daily",
        symptoms: "Ear pain, fever, irritability"
    },
    "conjunctivitis": {
        medications: "Tobramycin Eye Drops",
        dosage: "1 drop every 4 hours",
        symptoms: "Redness, itching, discharge from the eye"
    },
    "eczema": {
        medications: "Hydrocortisone Cream",
        dosage: "Apply twice daily",
        symptoms: "Itchy, inflamed skin"
    },
    "psoriasis": {
        medications: "Methotrexate",
        dosage: "7.5-25 mg once weekly",
        symptoms: "Red patches of skin covered with thick, silvery scales"
    },
    "acne": {
        medications: "Isotretinoin",
        dosage: "20 mg daily",
        symptoms: "Pimples, blackheads, cysts"
    },
    "food poisoning": {
        medications: "Oral Rehydration, Loperamide",
        dosage: "Dosage varies based on symptoms",
        symptoms: "Nausea, vomiting, diarrhea"
    },
    "peptic ulcer": {
        medications: "Pantoprazole",
        dosage: "40 mg daily",
        symptoms: "Burning stomach pain, bloating, indigestion"
    },
    "gout": {
        medications: "Allopurinol",
        dosage: "300 mg daily",
        symptoms: "Intense joint pain, swelling, redness"
    },
    "obesity": {
        medications: "Orlistat",
        dosage: "120 mg three times daily",
        symptoms: "Excess body weight, fatigue"
    },
    "alcoholism": {
        medications: "Disulfiram",
        dosage: "250 mg daily",
        symptoms: "Compulsive drinking, withdrawal symptoms"
    },
    "smoking addiction": {
        medications: "Varenicline",
        dosage: "1 mg twice daily",
        symptoms: "Cravings, irritability, anxiety"
    },
    "epilepsy": {
        medications: "Phenytoin",
        dosage: "100 mg three times daily",
        symptoms: "Seizures, confusion, loss of consciousness"
    },
    "parkinson's disease": {
        medications: "Levodopa-Carbidopa",
        dosage: "100/25 mg three times daily",
        symptoms: "Tremors, stiffness, difficulty with balance"
    },
    "alzheimer's disease": {
        medications: "Donepezil",
        dosage: "10 mg daily",
        symptoms: "Memory loss, confusion, difficulty with language"
    },
    "stroke prevention": {
        medications: "Aspirin",
        dosage: "81 mg daily",
        symptoms: "Risk factors include high blood pressure, high cholesterol"
    },
    "chronic kidney disease": {
        medications: "Furosemide",
        dosage: "20 mg daily",
        symptoms: "Fatigue, swelling, changes in urination"
    },
    "hemorrhoids": {
        medications: "Hydrocortisone suppositories",
        dosage: "As directed",
        symptoms: "Pain, itching, swelling around the anus"
    },
    "sciatica": {
        medications: "Gabapentin",
        dosage: "300 mg daily",
        symptoms: "Pain radiating down the leg, numbness, tingling"
        
    },
    "athlete's foot": {
        medications: "Clotrimazole Cream",
        dosage: "Apply twice daily",
        symptoms: "Itching, burning, cracked skin between toes"
    },
    "allergies": {
        medications: "Loratadine",
        dosage: "10 mg daily",
        symptoms: "Sneezing, itching, runny nose"
    },
    "strep throat": {
        medications: "Penicillin",
        dosage: "500 mg twice daily for 10 days",
        symptoms: "Sore throat, fever, swollen lymph nodes"
    },
    "meningitis": {
        medications: "Ceftriaxone",
        dosage: "2 g IV daily",
        symptoms: "Fever, headache, stiff neck"
    },
    "rabies": {
        medications: "Rabies Vaccine + Immunoglobulin",
        dosage: "As directed by healthcare provider",
        symptoms: "Fever, headache, confusion"
    },
    "leprosy": {
        medications: "Dapsone",
        dosage: "100 mg daily",
        symptoms: "Skin lesions, numbness, muscle weakness"
    },
    "h. pylori infection": {
        medications: "Clarithromycin + Amoxicillin",
        dosage: "Dosage varies based on treatment regimen",
        symptoms: "Abdominal pain, bloating, nausea"
    },
    "tetanus": {
        medications: "Tetanus Immunoglobulin + Vaccine",
        dosage: "As directed by healthcare provider",
        symptoms: "Muscle stiffness, spasms, difficulty swallowing"
    },
    "measles": {
        medications: "Vitamin A, Supportive Care",
        dosage: "As directed by healthcare provider",
        symptoms: "High fever, cough, runny nose, red eyes, sore throat, rash"
    },
    "mumps": {
        medications: "Supportive Therapy, Ibuprofen",
        dosage: "Ibuprofen (400 mg every 6-8 hours as needed)",
        symptoms: "Swollen salivary glands, fever, headache, muscle pain"
    },
    "rubella": {
        medications: "Supportive Therapy",
        dosage: "As directed by healthcare provider",
        symptoms: "Rash, fever, swollen lymph nodes"
    },
    "whooping cough": {
        medications: "Azithromycin",
        dosage: "500 mg on day 1, then 250 mg for 4 days",
        symptoms: "Severe coughing fits, whooping sound, vomiting"
    },
    "polio": {
        medications: "Polio Vaccine",
        dosage: "As per vaccination schedule",
        symptoms: "Fatigue, fever, headache, muscle weakness"
    },
    "hand, foot, and mouth disease": {
        medications: "Supportive Care, Pain Relievers",
        dosage: "As directed by healthcare provider",
        symptoms: "Fever, mouth sores, rash on hands and feet"
    },
    "scarlet fever": {
        medications: "Penicillin",
        dosage: "500 mg twice daily for 10 days",
        symptoms: "Sore throat, fever, red rash"
    },
    "diphtheria": {
        medications: "Diphtheria Antitoxin + Penicillin",
        dosage: "As directed by healthcare provider",
        symptoms: "Sore throat, fever, swollen glands"
    },
    "toxoplasmosis": {
        medications: "Pyrimethamine + Sulfadiazine",
        dosage: "As directed by healthcare provider",
        symptoms: "Flu-like symptoms, muscle aches, swollen lymph nodes"
    },
    "lyme disease": {
        medications: "Doxycycline",
        dosage: "100 mg twice daily for 14 days",
        symptoms: "Fever, headache, fatigue, skin rash"
    },
    "brucellosis": {
        medications: "Doxycycline + Rifampicin",
        dosage: "As directed by healthcare provider",
        symptoms: "Fever, sweats, malaise, anorexia"
    },
    "leishmaniasis": {
        medications: "Amphotericin B (IV)",
        dosage: "As directed by healthcare provider",
        symptoms: "Skin sores, fever, weight loss"
    },
    "schistosomiasis": {
        medications: "Praziquantel",
        dosage: "40 mg/kg once",
        symptoms: "Abdominal pain, diarrhea, blood in urine"
    },
    "chikungunya": {
        medications: "Supportive Therapy, Pain Relievers",
        dosage: "As directed by healthcare provider",
        symptoms: "Fever, joint pain, rash"
    },
    "yellow fever": {
        medications: "Yellow Fever Vaccine, Supportive Care",
        dosage: "As per vaccination schedule",
        symptoms: "Fever, chills, loss of appetite, muscle pain"
    },
    "zika virus": {
        medications: "Supportive Therapy",
        dosage: "As directed by healthcare provider",
        symptoms: "Fever, rash, joint pain, conjunctivitis"
    },
    "ebola virus disease": {
        medications: "Supportive Therapy, Experimental Antivirals",
        dosage: "As directed by healthcare provider",
        symptoms: "Fever, severe headache, muscle pain, vomiting"
    },
    "marburg virus": {
        medications: "Supportive Therapy",
        dosage: "As directed by healthcare provider",
        symptoms: "Fever, chills, headache, muscle aches"
    },
    "norovirus infection": {
        medications: "Supportive Therapy, Oral Rehydration",
        dosage: "As directed by healthcare provider",
        symptoms: "Nausea, vomiting, diarrhea"
    },
    "rotavirus infection": {
        medications: "Rotavirus Vaccine, Supportive Therapy",
        dosage: "As per vaccination schedule",
        symptoms: "Severe diarrhea, vomiting, fever"
        
    },
    "giardiasis": {
        medications: "Metronidazole",
        dosage: "250-500 mg three times daily for 7 days",
        symptoms: "Diarrhea, gas, stomach cramps"
    },
    "cryptosporidiosis": {
        medications: "Nitazoxanide",
        dosage: "500 mg twice daily for 3 days",
        symptoms: "Watery diarrhea, stomach cramps, dehydration"
    },
    "amoebiasis": {
        medications: "Metronidazole",
        dosage: "500 mg three times daily for 10 days",
        symptoms: "Diarrhea, stomach pain, weight loss"
    },
    "hookworm infection": {
        medications: "Albendazole",
        dosage: "400 mg once",
        symptoms: "Abdominal pain, diarrhea, anemia"
    },
    "tapeworm infection": {
        medications: "Praziquantel",
        dosage: "5-10 mg/kg once",
        symptoms: "Abdominal pain, nausea, weight loss"
    }
};

// Function to search for disease information
function searchDisease() {
    const input = document.getElementById("diseaseInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");
    const disease = diseases[input];

    if (disease) {
        resultDiv.innerHTML = `<h2>${input.charAt(0).toUpperCase() + input.slice(1)}</h2>
                               <p><strong>Medications:</strong> ${disease.medications}</p>
                               <p><strong>Dosage:</strong> ${disease.dosage}</p>
                               <p><strong>Symptoms:</strong> ${disease.symptoms}</p>`;
    } else {
        resultDiv.innerHTML = `<p>No information found for "${input}". Please try another disease.</p>`;
    }
}