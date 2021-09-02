import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { TextField, Button } from "@material-ui/core"
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

//URGENT TODO: Make backend URL https
const backendURL = "http://ec2-54-169-82-203.ap-southeast-1.compute.amazonaws.com:3000"

function SignUpPage() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const history = useHistory()
  const onSubmit = data => {
    toast.promise(
      axios.post(`${backendURL}/AlphaUser`, data),
      {
        loading: "Signing up for alpha",
        success: <b>Alpha Signup Success</b>,
        error: <b>Alpha Signup Failed</b>
      }
    )
    history.push('/')

  };
  return (
    <Layout title="Alpha Signup">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"

            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <Button type="submit">Sign Up</Button>
        </form>

      </div>
    </Layout>
  );
}

export default SignUpPage;