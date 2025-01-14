type SourceData = {
    user_id: string;
    full_name: string;
    contact: {
        phone: string;
        email: string;
    };
    address: {
        city: string;
        zip: string;
    };
    is_active: boolean;
};

type TargetData = {
    id: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: string;
};

const convertData = (data: SourceData): TargetData => {

    return {
        id: data.user_id,
        name: data.full_name,
        ...data.contact,
        location: `${data.address.city}, ${data.address.zip}`,
        status: data.is_active ? "active" : "inactive",
    };
};

const data: SourceData = {
    user_id: "1275",
    full_name: "John Doe",
    contact: {
        phone: "+123456789",
        email: "john.doe@example.com",
    },
    address: {
        city: "New York",
        zip: "10001",
    },
    is_active: true,
};

const target: TargetData = convertData(data);
console.log(target);
