import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'


const GamecardSkeleton = () => {
  return (
    <Card.Root width="300px" borderRadius={10} overflow='hidden'>
        <Skeleton height='200px' width='100%'/>
        <CardBody>
            <SkeletonText height='20px' width='70%' marginBottom={6}/>
            <SkeletonText height='20px' width='50%'/>
        </CardBody>
    </Card.Root>
  )
}

export default GamecardSkeleton