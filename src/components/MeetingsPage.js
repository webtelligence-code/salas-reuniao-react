import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Meetings from './Meetings'

const MeetingsPage = () => {
    const navigate = useNavigate();

    return (
        <div>
        {/* Button to go to add meeting page */}
            <Button
                variant='success'
                size='sm'
                onClick={() => navigate('/add')}
            >
                Adicionar reunião
            </Button>

            {/* Meetings list component */}
            <Meetings />
        </div>
    )
}

export default MeetingsPage