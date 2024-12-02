import { ButtonVariants } from '@/button-variants/buttons-variants-enum'
import Button from '@/components/button'
import { PageType } from '@/enums/page-type'
import useDictionary from '@/hooks/use-dictionary';
import React, { useEffect } from 'react'

interface PageTypeButtonsProps{
    buttonActive:PageType;
    selectedLanguage:'ro'|'en';
    setButtonActive:(setButtonActive:PageType)=>void;
}

const PageTypeButtons = ({buttonActive,selectedLanguage,setButtonActive}:PageTypeButtonsProps) => {
    const { dictionary,setLanguage } = useDictionary();
    useEffect(()=>{
      setLanguage(selectedLanguage);
    },[selectedLanguage])
  return (
    <>
    <Button
            variant={ButtonVariants.Default}
            active={buttonActive == PageType.racing}
            onClick={() => buttonActive !== PageType.racing && setButtonActive(PageType.racing)}
          >
            {dictionary.racing}
          </Button>
          <Button
            variant={ButtonVariants.Default}
            active={buttonActive == PageType.history}
            onClick={() => buttonActive !== PageType.history && setButtonActive(PageType.history)}
          >
            {dictionary.history}
          </Button>
          <Button
            variant={ButtonVariants.Default}
            active={buttonActive == PageType.team}
            onClick={() => buttonActive !== PageType.team && setButtonActive(PageType.team)}
          >
            {dictionary.team}
          </Button>
          <Button
            variant={ButtonVariants.Default}
            active={buttonActive == PageType.contact}
            onClick={() => buttonActive !== PageType.contact && setButtonActive(PageType.contact)}
          >
            {dictionary.contact}
          </Button>
    </>
  )
}

export default PageTypeButtons