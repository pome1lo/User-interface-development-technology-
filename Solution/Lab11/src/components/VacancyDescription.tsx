import {DescriptionPropsType} from "../types";
import DOMPurify from 'dompurify';
//@ts-ignore
import styles from '../styles/VacancyDescription.module.css';
import {Avatar, Box, Card, IconButton, Typography} from "@mui/material";

export const VacancyDescription = ({vacancy, cancelSelection} : DescriptionPropsType) => {
    if (vacancy !== null) {
        return (
            <Card sx={{borderRadius: '10px', boxShadow: "0 2px 15px #E1E1E1"}} className={styles.mainContainer}>
                <Box style={{borderBottom: '2px solid #F9F9F9'}}>
                    <Box className={styles.header}>
                        <Avatar className={styles.img} srcSet={vacancy.logo} alt="logotype"/>
                        <Box className={styles.title}>
                            <Typography className={styles.jobName}>{vacancy.jobName}</Typography>
                            <Typography className={styles.companyName}><pre>{vacancy.companyName}   |   {vacancy.city}</pre></Typography>
                        </Box>
                        <IconButton sx={{width: '20', height: '20'}} className={styles.close} onClick={() => cancelSelection(vacancy.id)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.52326 0.415359L10 7.89183L17.446 0.446127C17.5765 0.307239 17.7337 0.196133 17.9081 0.119473C18.0826 0.0428123 18.2708 0.00217578 18.4613 0C18.8693 0 19.2606 0.162078 19.5492 0.450577C19.8377 0.739077 19.9998 1.13037 19.9998 1.53837C20.0033 1.72697 19.9683 1.91433 19.8969 2.08892C19.8255 2.26352 19.7191 2.42168 19.5844 2.55369L12.0615 9.99939L19.5844 17.522C19.8379 17.7701 19.9866 18.106 19.9998 18.4604C19.9998 18.8684 19.8377 19.2597 19.5492 19.5482C19.2606 19.8367 18.8693 19.9988 18.4613 19.9988C18.2653 20.0069 18.0696 19.9742 17.8869 19.9027C17.7042 19.8312 17.5383 19.7225 17.3998 19.5834L10 12.107L2.53865 19.568C2.40866 19.7023 2.25337 19.8095 2.08174 19.8834C1.91011 19.9573 1.72554 19.9966 1.53867 19.9988C1.13066 19.9988 0.739354 19.8367 0.450844 19.5482C0.162334 19.2597 0.000250311 18.8684 0.000250311 18.4604C-0.00333651 18.2718 0.031658 18.0845 0.103086 17.9099C0.174515 17.7353 0.28087 17.5771 0.415625 17.4451L7.93851 9.99939L0.415625 2.47677C0.162069 2.22872 0.0133879 1.89283 0.000250311 1.53837C0.000250311 1.13037 0.162334 0.739077 0.450844 0.450577C0.739354 0.162078 1.13066 0 1.53867 0C1.90789 0.0046151 2.26173 0.153837 2.52326 0.415359Z" fill="#49627E"/>
                            </svg>
                        </IconButton>
                    </Box>
                <Typography className={styles.salary}>От {vacancy.description.salaryFrom} до {vacancy.description.salaryTo} руб.</Typography>
                </Box>
                <Typography className={styles.mainDescription} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(vacancy.description.description)}}>
                </Typography>
            </Card>
        );
    }
    else {
        return (
            <></>
        )
    }
}