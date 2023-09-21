## fetching data from air table

useEffect(() => {
    const fetchAIRTABLEDATA = async () => {
      const response = await fetch(`${AIRTABLE_BASE_URL}/${TABLE}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        },
      });
      const jsonData = await response.json();
      const airtableData = jsonData.records.map((data) => ({
        ...data.fields,
        id: data.id,
      }));
      setData(airtableData);
    };
    fetchAIRTABLEDATA();
  }, []);


  ## adding data into airtable

  const addNewAirtableData = async () => {

    const dataToBeAdded = {
      "fields": {
        "name": `${data_in_string_form}`,
        "id": `${data_in_string_form}`
      }
    };

    const response = await fetch(`${AIRTABLE_BASE_URL}/${TABLE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      },
      body: JSON.stringify(dataToBeAdded),
    });
    await response.json();
  };

  ## updating airtable data

  const updateAirtableData = (newData) => {
  
    const dataToBeUpdated = {
      "fields":{
        "updateMe": `${newData}`,
      }
    };
    const response = await fetch(`${AIRTABLE_BASE_URL}/${TABLE}/${airtableItemToBeUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      },
      body: JSON.stringify(dataToBeUpdated)
    });
    await response.json();
  };
  

  ## deleting airtable data

  const deleteThisAirtableData = () => {
    const response = await fetch(`${AIRTABLE_BASE_URL}/${TABLE}/${airtableItemToBeDeleted.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      },
    });
    await response.json();
  };
  