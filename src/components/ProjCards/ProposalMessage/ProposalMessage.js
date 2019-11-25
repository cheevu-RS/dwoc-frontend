import React, { useState }  from 'react';


import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const environment=require("../../../Environment").environment;

export default function ProposalMessage(props) {
	const userId=props.userId;
  let [message, toggleMessage] = useState("");
  let length=0;

  return(
    <div>
    <QueryRenderer
			environment={environment}
			query={graphql`
				query ProposalMessageQuery($userId: ProposalWhereInput) {
					proposals(where:$userId) {
						id

					}
				}
			`}
			variables={{userId:{user:{id:userId}}}}
			render={({ error, prop }) => {

				if (error) {
					console.log(`${error} <= Relay error ProposalMessagejs(query userProfile)`);
					return;
				}
       if(prop){
				 length=prop.proposals.length;
			 }
       if(!length){
         message="You can have a maximum of 3 submissions";
       }
       else{
         if(length<3)
          message=`You can submit ${3-length} more proposals`;
         else
           message="Sorry!You've reached the maximun submission limit!";
       }
        toggleMessage(message);
				return <div>{message}</div>;
			}}
		/>
    {message}
    </div>
  )
}
