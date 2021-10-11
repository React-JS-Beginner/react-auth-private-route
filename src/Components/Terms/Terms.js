import React from 'react';
import { Container, Button } from "react-bootstrap";
const Terms = () => {
    return (
        <Container className="mt-5 mb-5 pb-5">
            <h2 className="text-center mb-5">Terms &amp; Conditions</h2>
            <div className="w-75 mx-auto">
            <div className="text-start mb-5">
            <h4 className="text-secondary" ><u>Lorem Ipsum Dolor</u></h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quo illum suscipit quia deserunt? Veritatis laborum, tempore illo vel, nostrum quas facilis nemo, eveniet temporibus quae atque consequatur doloribus fuga! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quo illum suscipit quia deserunt? Veritatis laborum, tempore illo vel, nostrum quas facilis nemo, eveniet temporibus quae atque consequatur doloribus fuga!</p>
            </div>
            <div className="text-start mb-5">
            <h5>Lorem Ipsum Dolor</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quo illum suscipit quia deserunt? Veritatis laborum, tempore illo vel, nostrum quas facilis nemo, eveniet temporibus quae atque consequatur doloribus fuga! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quo illum suscipit quia deserunt? Veritatis laborum, tempore illo vel, nostrum quas facilis nemo, eveniet temporibus quae atque consequatur doloribus fuga!</p>
            </div>
            <div className="text-start mb-5">
            <h5>Lorem Ipsum Dolor</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quo illum suscipit quia deserunt? Veritatis laborum, tempore illo vel, nostrum quas facilis nemo, eveniet temporibus quae atque consequatur doloribus fuga! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quo illum suscipit quia deserunt? Veritatis laborum, tempore illo vel, nostrum quas facilis nemo, eveniet temporibus quae atque consequatur doloribus fuga!</p>
            </div>
            </div>
            <div className="text-center pt-3">
            <Button variant="secondary pe-5 ps-5" size="sm">Accept</Button> &nbsp; &nbsp; <Button variant="outline-secondary pe-5 ps-5" size="sm">Decline</Button>
            </div>
        </Container>
    );
};

export default Terms;