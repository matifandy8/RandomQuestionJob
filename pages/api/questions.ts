// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const questions = [  
  {"id":"1","question":"Tell me about yourself."},  
  {"id":"2","question":"What are your strengths?"},  
  {"id":"3","question":"What are your weaknesses?"},  
  {"id":"4","question":"Why do you want this job?"},  
  {"id":"5","question":"Where would you like to be in your career five years from now?"},  
  {"id":"6","question":"What's your ideal company?"}, 
  {"id":"7","question":"What attracted you to this company?"},  
  {"id":"8","question":"What did you like least about your last job?"},  
  {"id":"9","question":"When were you most satisfied in your job?"},  
  {"id":"10","question":"What can you do for us that other candidates can't?"},  
  {"id":"11","question":"What were the responsibilities of your last position?"}, 
  {"id":"12","question":"Why are you leaving your present job?"}, 
  {"id":"13","question":"What do you know about our company?"}, 
  {"id":"14","question":"Are you willing to relocate?"}, 
  {"id":"15","question":"Do you have any questions for me?"}, 
  {"id":"16","question":"What was the last project you led, and what was its outcome?"}, 
  {"id":"17","question":"Give me an example of a time that you felt you went above and beyond the call of duty at work."}, 
  {"id":"18","question":"Can you describe a time when your work was criticized?"}, 
  {"id":"19","question":"Have you ever been on a team where someone was not pulling their own weight? How did you handle it?"}, 
  {"id":"20","question":"What do you know about this industry?"}  
]  

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(questions)
}
