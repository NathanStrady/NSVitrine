import {Card, CardBody, CardHeader} from "@heroui/card";

const About = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-4 gap-4">
                <Card className="" shadow="lg">
                    <CardHeader className="flex gap-3">
                        <p className="text-lg font-bold">
                            Test
                        </p>
                    </CardHeader>
                    <CardBody>
                        <p>Make beautiful websites regardless of your design experience.</p>
                    </CardBody>
                </Card>
                <Card className="" shadow="lg">
                    <CardHeader className="flex gap-3">
                        <p className="text-lg font-bold">
                            Test
                        </p>
                    </CardHeader>
                    <CardBody>
                        <p>Make beautiful websites regardless of your design experience.</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default About;