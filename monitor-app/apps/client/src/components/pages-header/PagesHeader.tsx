import {
  IconButton,
  IconButtonProps,
  Stack,
  StackProps,
  Typography,
  TypographyProps
} from '@mui/material'
import { styled } from '@mui/material/styles'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useRouter } from 'next/navigation'

const StyledStack = styled(Stack)<StackProps>(({ theme }) => ({
  borderRadius: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.spacing(2)
}))

const StyledTypography = styled(Typography)<TypographyProps>({
  flex: '1 1 100%',
  fontSize: 24
})

const StyledIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  color: theme.palette.primary.main
}))

export interface PagesHeaderProps {
  title: string
}

export function PagesHeader({ title }: PagesHeaderProps) {
  const router = useRouter()
  const handleBackClick = () => {
    router.push('/dashboard/machines')
  }

  return (
    <StyledStack>
      <StyledTypography>{title}</StyledTypography>
      <StyledIconButton aria-label="back" onClick={handleBackClick}>
        <ArrowBackIosNewIcon />
      </StyledIconButton>
    </StyledStack>
  )
}

export default PagesHeader
