import styled from "styled-components";
import { Logout, PeopleFilled } from "@navikt/ds-icons";
import { BodyShort, Button, Heading, Popover } from "@navikt/ds-react";
import {
  RouterHomePage,
  RouterLogin,
  RouterLogout,
  RouterInternt,
} from "../../types/routes";
import BurgerMenu from "./Burgermenu";
import { useRouter } from "next/router";
import { createRef, SetStateAction, useContext, useState } from "react";
import { UserStateContext } from "../UserStatusContext";
import { CustomHeader, HeaderContent, DetailText, HeadingCustomized } from "../Styles";



export const Header = (props: { imageURL: any, userID:string, userName:string }) => {
 const router = useRouter();
  const [subscribeModalHidden, setSubscribeModalBoolean] = useState(false);
  const [showFilters, toggleFilters] = useState(false);

  const [anchor, setAnchor] = useState(undefined);

  const { name, navIdent } = useContext(UserStateContext);

  const filterRef = createRef();

  const toggleSubscribeModal = () => {
    setSubscribeModalBoolean(!subscribeModalHidden);
  };

  const handleToggleFilters = () => {
    toggleFilters(!showFilters);
  };

  const openPopover = (event: any) => {
    if (anchor) {
      setAnchor(undefined);
      return;
    }
    setAnchor(event);
  };

  const closePopover = () => {
    if (anchor) {
      setAnchor(undefined);
    }
  };

  const conditionalReroute = () => {
    if (!navIdent) {
      router.push(RouterInternt.PATH);
    } else {
      router.push(RouterHomePage.PATH);
    }
  };

  return (
    <CustomHeader>
      <div className="header-menues">
        <a href={RouterHomePage.PATH} aria-label="Lenke til forside">
          <img src={props.imageURL} alt="Til forsiden" aria-hidden="true" />
        </a>
      </div>

      <HeaderContent>
        <HeadingCustomized size="2xlarge" level="1">
          <b>Status</b> digitale tjenester{" "}
          <DetailText>Under oppbygging</DetailText>
        </HeadingCustomized>
      </HeaderContent>
      <div className="header-menues last">
        <BurgerMenu userID  = {props.userID}/>
       <ProfileOrLogin name={props.userName} navIdent={props.userID} />
      </div>
    </CustomHeader>
  );
};

/* ---------------------------------------- Helpers below ---------------------------------------- */

/*const FilterRow = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    & > * {
        margin: 5px 0;
    }
`
const FilterCategoryButton = styled.button`
    font-family: "Source Sans Pro", Arial, sans-serif;
    font-size: 1rem;
    font-weight: bold;

    min-width: 200px;
    margin-bottom: 1rem;
    line-height: 1.5rem;
    padding: 0.3rem 1rem;
    border: 1px solid grey;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Filters = () => {
    const { filters, changeFilters } = useContext(FilterContext)
    const [filterCategoriesExpanded, changeFilterCategoryExpanded] = useState(
        []
    )

    const handleFilter = (event) => {
        const filterOption = event.target.value
        if (filters.includes(filterOption)) {
            changeFilters(filters.filter((f) => f != filterOption))
            return
        }
        changeFilters([...filters, filterOption])
    }

    const toggleFilter = (category: string) => {
        if (filterCategoriesExpanded.includes(category)) {
            changeFilterCategoryExpanded(
                filterCategoriesExpanded.filter((f) => f != category)
            )
            return
        }
        changeFilterCategoryExpanded([...filterCategoriesExpanded, category])
    }

    return (
        <FilterRow>
            <FilterCategoryButton
                onClick={() => toggleFilter("Tjenestestatus")}
            >
                <span>Tjenestestatus ({filters.length})</span>
                {!filterCategoriesExpanded.includes("Tjenestestatus") ? (
                    <Expand />
                ) : (
                    <Collapse />
                )}
            </FilterCategoryButton>

            {filterCategoriesExpanded.includes("Tjenestestatus") &&
                Object.values(FilterOption).map((option) => {
                    return (
                        <Checkbox
                            aria-checked={filters.includes(option)}
                            key={option}
                            value={option}
                            checked={filters.includes(option)}
                            onChange={(event) => {
                                handleFilter(event)
                            }}
                        >
                            {option}
                        </Checkbox>
                    )
                })}
        </FilterRow>
    )
}*/

// ---

const ProfileButton = styled(Button)`
    border-radius: 50px;
    min-width: 148px;
    color: black;
    box-shadow: inset 0 0 0 2px black;

    :hover {
        background: black;
    }
`

const LoginButton = styled(Button)`
    border-radius: 50px;
    min-width: 148px;
    color: black;
    box-shadow: inset 0 0 0 2px black;

    :hover {
        background: black;
    }
`

const PopoverCustomized = styled(Popover)`
    width: max-content;

    ul {
        padding: 0;
        margin: 1rem;
    }

    ul > li {
        color: black;
        list-style: none;
        text-align: left;
    }

    li {
        padding: 1rem 0;
    }

    .navds-link,
    svg {
        color: black;
        cursor: pointer;
    }
`

const ProfileOrLogin: React.FC<{ name: string; navIdent: string }> = ({
  name,
  navIdent,
}) => {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<Element|null>(null)

  const handleSetOpen = (event: any) => {
      setOpen(!open)
      if (anchorEl) {
          setAnchorEl(null)
          return
      }
      setAnchorEl(event)
  }

  const closePopover = () => {
      setOpen(!open)
      if (anchorEl) {
          setAnchorEl(null)
      }
  }

  return (
      <>
          {name && navIdent ? (
              <>
                  <ProfileButton
                      variant="secondary"
                      onClick={(event:any) => handleSetOpen(event.currentTarget)}
                      aria-expanded={!!anchorEl}
                      icon = {<PeopleFilled />}
                  >
                      
                  </ProfileButton>
                  <PopoverCustomized
                      open={open}
                      onClose={closePopover}
                      anchorEl={anchorEl}
                      placement="bottom"
                  >
                      <PopoverCustomized.Content>
                          <strong>{name}</strong>
                          <ul>
                            
                              <li>
                                  <a
                                      className="navds-link"
                                      href={RouterLogout.PATH}
                                  >
                                      {" "}
                                      <Logout /> Logg ut
                                  </a>
                              </li>
                          </ul>
                      </PopoverCustomized.Content>
                  </PopoverCustomized>
              </>
          ) : (
              <LoginButton
                  variant="secondary"
                  onClick={() => router.push(RouterLogin.PATH)}
              >
                  <BodyShort>
                      <b>Logg inn</b>
                  </BodyShort>
              </LoginButton>
          )}
      </>
  )
}


