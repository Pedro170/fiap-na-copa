import styled from "styled-components";
// import img from '../../image/bg-copa.webp'

export const CLogin = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
export const DivLogin = styled.div `
  height: 100vh;
  background: linear-gradient(135deg, #9E0C36, #20010A);
  padding: 1rem;
`

export const CImg = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  img {
    width: 200px;
  }
`

export const Form = styled.form`
  max-width: 30rem;
  padding: 1rem;
  margin-top: 8vh;
`
