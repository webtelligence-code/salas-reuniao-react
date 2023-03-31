import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';

const Meetings = () => {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        getMeetings();
    }, []);

    const getMeetings = () => {
        axios.get('http://localhost:80/api/salas-reunioes/meetings/')
            .then((response) => {
                console.log(response.data);
                setMeetings(response.data);
            })
    }

    return (
        <Container>
            {meetings.map((meeting, key) => (
                <Row key={key} className='align-items-center py-2'>
                    <Col>
                        <Image
                            roundedCircle
                            src={meeting.url_imagem}
                            alt='room image'
                            height={75}
                        />
                    </Col>
                    <Col>
                        <Row style={{ fontWeight: 'bold' }}>{meeting.hora_inicio} - {meeting.hora_fim}</Row>
                        <Row style={{ fontWeight: 'lighter' }}>{meeting.data}</Row>
                    </Col>
                    <Col>
                        <Row style={{ fontWeight: 'bold' }}>{meeting.motivo}</Row>
                        <Row style={{ fontWeight: 'lighter' }}>{meeting.sala}</Row>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}

export default Meetings