interface AppointmentDto {
    date:Date;
    time:string;
    status:"active" | "cancelled";
    userId:number;
}

export default AppointmentDto;