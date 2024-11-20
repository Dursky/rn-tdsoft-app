import React, {useRef, useState} from 'react';
import {TouchableOpacity, View, Text, Animated, Dimensions} from 'react-native';
import {DropShadow} from '../DropShadow/DropShadow.component';
import {theme} from '@/styles';
import {Button} from '@/components/Button';
import {CharacterFilters} from '@/types';
import UpArrow from '@/icons/UpArrow';
import DownArrow from '@/icons/DownArrow';
import {styles} from './Filter.styled';
import {Checkbox} from '../Checkbox/Checkbox.component';
import {capitalizeFirstLetter} from '@/utils';

const FILTER_OPTIONS: Record<
  keyof Pick<CharacterFilters, 'status' | 'species'>,
  string[]
> = {
  status: ['alive', 'dead', 'unknown'],
  species: ['Human', 'Humanoid'],
};

const SCREEN_HEIGHT = Dimensions.get('window').height;
const FILTER_HEIGHT = SCREEN_HEIGHT / 2;

type FilterProps = {
  onApplyFilters: (filters: CharacterFilters) => void;
  initialFilters?: CharacterFilters;
};

export const Filter = ({onApplyFilters, initialFilters}: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<CharacterFilters>(
    initialFilters ?? {},
  );
  const translateY = useRef(new Animated.Value(0)).current;

  const toggleFilter = () => {
    Animated.spring(translateY, {
      toValue: !isOpen ? -SCREEN_HEIGHT / 2 - 50 : 0,
      useNativeDriver: true,
      damping: 20,
      stiffness: 90,
    }).start();
    setIsOpen(!isOpen);
  };

  const handleOptionPress = (
    category: keyof typeof FILTER_OPTIONS,
    option: string,
  ) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]:
        prev[category] === option
          ? undefined
          : (option.toLowerCase() as CharacterFilters[keyof CharacterFilters]),
    }));
  };

  const handleReset = () => {
    setSelectedFilters({});
  };

  const handleApply = () => {
    onApplyFilters(selectedFilters);
    toggleFilter();
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={toggleFilter} style={styles.filterButton}>
          <Text style={styles.filterText}>FILTER</Text>
          {isOpen ? <UpArrow /> : <DownArrow />}
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            transform: [{translateY}],
            height: FILTER_HEIGHT,
            top: SCREEN_HEIGHT - FILTER_HEIGHT,
          },
        ]}>
        <DropShadow
          borderRadius={theme.spacing.lg}
          shadowColor={theme.colors.primary}>
          <View style={styles.optionsContainer}>
            <View style={styles.optionsContent}>
              {(
                Object.entries(FILTER_OPTIONS) as [
                  keyof typeof FILTER_OPTIONS,
                  string[],
                ][]
              ).map(([category, options]) => (
                <View key={category} style={styles.categoryContainer}>
                  <Text style={styles.categoryTitle}>
                    {category.toUpperCase()}
                  </Text>
                  <View style={styles.optionsList}>
                    {options.map(option => {
                      const isChecked =
                        selectedFilters[category] === option.toLowerCase();

                      return (
                        <View style={styles.label}>
                          <Checkbox
                            onPress={() => handleOptionPress(category, option)}
                            checked={isChecked}
                          />
                          <Text style={theme.typography.secondary}>
                            {capitalizeFirstLetter(option)}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.buttonsContainer}>
              <Button
                content="RESET"
                variant="outlined"
                onPress={handleReset}
                style={styles.buttonLeft}
              />
              <Button
                content="APPLY"
                variant="filled"
                onPress={handleApply}
                style={styles.buttonRight}
              />
            </View>
          </View>
        </DropShadow>
      </Animated.View>
    </View>
  );
};

export default Filter;
