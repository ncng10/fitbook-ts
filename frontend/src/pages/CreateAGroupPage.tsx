import React from 'react'
import { CreateAGroup } from '../components/CreateAGroup'

interface CreateAGroupPageProps {

}

export const CreateAGroupPage: React.FC<CreateAGroupPageProps> = ({ }) => {
    return (
        <React.Fragment>
            <CreateAGroup />
        </React.Fragment>
    );
}