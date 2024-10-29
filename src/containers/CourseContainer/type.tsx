export interface CourseInterface {
    success: boolean,
    course : {
        CourseId: string,
        Title:string,
        Overview: string,
        SubTitle: string,
        Slogan: string,
        Duration : string,
        MinSalary: string,
        MidSalary: string,
        MaxSalary: string,
        stream_id: number,
        stream: string,
        OutComes  : 
            {
                OutcomeTitle: string,
                OutcomeDescription : string
            }[],
        CareerPath:string[],
        KeyTopic: string[],
        Skill: string[],
        banner : string,
        mobile_banner: string,
        meta_title : string,
        meta_description: string,
        meta_keyword: string
    }
}