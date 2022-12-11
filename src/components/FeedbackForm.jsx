import { useForm } from 'react-hook-form';
import { Button, Form, Input, MessageInput } from './feedbackForm.styled';

export const FeedbackForm = () => {

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = ({name, email, message}) => {
        console.log({ name, email, message });
        reset();
    }
    
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label='Name'
                {...register ('name', { required: true })}
                type='text'
                placeholder='Your name*'
            />
            <Input
                label='Email'
                {...register ('email', { required: true })}
                type='email'
                placeholder='Your e-mail*'
            />
            <MessageInput
                label='Message'
                {...register ('message', { required: true })}
                type='text'
                placeholder='Your message*' />
            <Button type='submit'>Send message</Button>
        </Form>
    )
}