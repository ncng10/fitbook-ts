import React, { ChangeEvent, useState } from 'react'

interface CreateAGroupProps {

}

export const CreateAGroup: React.FC<CreateAGroupProps> = ({ }) => {
    const [inputs, setInputs] = useState({
        groupName: ""
    });

    const { groupName } = inputs;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const body = { groupName }
            const response = await fetch(`http://localhost:5000/api/groups/create-a-group`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        token: localStorage.token
                    },
                    body: JSON.stringify(body)
                });
            const parseRes = await response.json();
            console.log(parseRes);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    value={groupName}
                    onChange={e => handleChange(e)}
                    name="groupName"
                />
                <button>Create Group</button>
            </form>
        </React.Fragment>
    );
}