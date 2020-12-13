import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const basicStyles = css`


.table {
  background: #fff;
  width: 300px;
  height: auto;
  display: block;
  margin: 20px;
  border-radius: 8px;
  overflow: hidden;
  -moz-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  -webkit-transform: translateY(0%);
  transform: translateY(0%);
  -webkit-transition: .3s;
  transition: .3s;
}
.table:hover {
  -webkit-transform: translateY(-2%);
  transform: translateY(-2%);
  -moz-box-shadow: 1px 8px 5px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 1px 8px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 8px 5px rgba(0, 0, 0, 0.2);
}
.table .heading {
  background: #f0f4f2;
  width: 100%;
  padding: 20px;
  text-align: left;
  font-size: 15pt;
  color: #272625;
  margin-bottom: 40px;
  text-transform: capitalize;
}
.table .block {
  display: block;
  width: 84%;
  margin: 16px auto;

  border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
}
.table .block .price {
  float: right;
  position: relative;
  right: 30px;
}
.table .block .price sub {
  position: absolute;
  right: -30px;
  top: 5px;
  font-weight: lighter;
  font-size: 9pt;
}
.table .block .options {
  display: block;
  list-style: none;
  margin: 10px auto;
}
.table .block .options li {
  font-size: 13px;
  color: #676462;
  text-transform: capitalize;
}
.table .btn {
  display: block;
  margin: 20px auto 30px;
  width: 60%;
  height: 50px;
  background: #fb6a30;
  border: none;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  -webkit-transition: .3s;
  transition: .3s;
  overflow: hidden;
}
.table .btn p {
  font-weight: bolder;
  color: #fff;
  font-size: 10pt;
  text-align: center;
  line-height: 50px;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: all 600ms cubic-bezier(1, 0, 0, 1);
  transition: all 600ms cubic-bezier(1, 0, 0, 1);
}
.table .btn span {
  font-size: 20px;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  position: relative;
  top: -35px;
  left: -100%;
  color: #fff;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.table .btn:hover {
  cursor: pointer;
}
.table .btn:hover span {
  left: 0%;
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}
.table .btn:hover p {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}

p {
  text-align: left;
  color: #272625;
  font-weight: 600;
  font-size: 15px;
  text-transform: capitalize;
}

h4 {
  position: absolute;
  top: 0;
  left: 20px;
  color: #fff;
  font-size: 1.6em;
}
h4 a {
  text-decoration: none;
  color: #fff;
  -webkit-transition: .5s;
  transition: .5s;
}
h4 a:hover {
  font-size: 1.8em;
  text-decoration: underline;
}
`

export const CardBase = styled.div`
  ${basicStyles};
`